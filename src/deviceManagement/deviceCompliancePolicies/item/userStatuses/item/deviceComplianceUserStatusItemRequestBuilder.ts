import {createDeviceComplianceUserStatusFromDiscriminatorValue} from '../../../../../models/createDeviceComplianceUserStatusFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceUserStatus} from '../../../../../models/deserializeIntoDeviceComplianceUserStatus';
import type {DeviceComplianceUserStatus} from '../../../../../models/deviceComplianceUserStatus';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceUserStatus} from '../../../../../models/serializeDeviceComplianceUserStatus';
import {DeviceComplianceUserStatusItemRequestBuilderDeleteRequestConfiguration} from './deviceComplianceUserStatusItemRequestBuilderDeleteRequestConfiguration';
import {DeviceComplianceUserStatusItemRequestBuilderGetRequestConfiguration} from './deviceComplianceUserStatusItemRequestBuilderGetRequestConfiguration';
import {DeviceComplianceUserStatusItemRequestBuilderPatchRequestConfiguration} from './deviceComplianceUserStatusItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class DeviceComplianceUserStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceComplianceUserStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/userStatuses/{deviceComplianceUserStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceComplianceUserStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceuserstatus-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceComplianceUserStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceComplianceUserStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceUserStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceuserstatus-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceComplianceUserStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceUserStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceUserStatus>(requestInfo, createDeviceComplianceUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceComplianceUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceUserStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceuserstatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceComplianceUserStatus, requestConfiguration?: DeviceComplianceUserStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceComplianceUserStatus | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceUserStatus>(requestInfo, createDeviceComplianceUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceComplianceUserStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceComplianceUserStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceComplianceUserStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceComplianceUserStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceComplianceUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceComplianceUserStatus, requestConfiguration?: DeviceComplianceUserStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceComplianceUserStatus);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceComplianceUserStatusItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceComplianceUserStatusItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceComplianceUserStatusItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
