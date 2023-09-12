import { createDeviceManagementTroubleshootingEventFromDiscriminatorValue } from '../../../models/createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import { deserializeIntoDeviceManagementTroubleshootingEvent } from '../../../models/deserializeIntoDeviceManagementTroubleshootingEvent';
import { type DeviceManagementTroubleshootingEvent } from '../../../models/deviceManagementTroubleshootingEvent';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeDeviceManagementTroubleshootingEvent } from '../../../models/serializeDeviceManagementTroubleshootingEvent';
import { type DeviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration } from './deviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration } from './deviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration';
import { type DeviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration } from './deviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the troubleshootingEvents property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceManagementTroubleshootingEventItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceManagementTroubleshootingEventItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property troubleshootingEvents for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The list of troubleshooting events for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementTroubleshootingEvent
     */
    public get(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementTroubleshootingEvent | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementTroubleshootingEvent>(requestInfo, createDeviceManagementTroubleshootingEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property troubleshootingEvents in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementTroubleshootingEvent
     */
    public patch(body: DeviceManagementTroubleshootingEvent, requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceManagementTroubleshootingEvent | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementTroubleshootingEvent>(requestInfo, createDeviceManagementTroubleshootingEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property troubleshootingEvents for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The list of troubleshooting events for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property troubleshootingEvents in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceManagementTroubleshootingEvent, requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceManagementTroubleshootingEvent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceManagementTroubleshootingEventItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceManagementTroubleshootingEventItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceManagementTroubleshootingEventItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
