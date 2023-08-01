import {createDeviceConfigurationUserStatusFromDiscriminatorValue} from '../../../../../models/createDeviceConfigurationUserStatusFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationUserStatus} from '../../../../../models/deserializeIntoDeviceConfigurationUserStatus';
import type {DeviceConfigurationUserStatus} from '../../../../../models/deviceConfigurationUserStatus';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationUserStatus} from '../../../../../models/serializeDeviceConfigurationUserStatus';
import {DeviceConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration} from './deviceConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration';
import {DeviceConfigurationUserStatusItemRequestBuilderGetRequestConfiguration} from './deviceConfigurationUserStatusItemRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration} from './deviceConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStatuses property of the microsoft.graph.deviceConfiguration entity.
 */
export class DeviceConfigurationUserStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationUserStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/userStatuses/{deviceConfigurationUserStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceConfigurationUserStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuserstatus-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceConfigurationUserStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationUserStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuserstatus-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceConfigurationUserStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationUserStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationUserStatus>(requestInfo, createDeviceConfigurationUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceConfigurationUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationUserStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuserstatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceConfigurationUserStatus | undefined, requestConfiguration?: DeviceConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationUserStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationUserStatus>(requestInfo, createDeviceConfigurationUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceConfigurationUserStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceConfigurationUserStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationUserStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceConfigurationUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationUserStatus | undefined, requestConfiguration?: DeviceConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationUserStatus);
        return requestInfo;
    };
}
