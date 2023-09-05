import { createDeviceConfigurationAssignmentFromDiscriminatorValue } from '../../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import { deserializeIntoDeviceConfigurationAssignment } from '../../../../../models/deserializeIntoDeviceConfigurationAssignment';
import { type DeviceConfigurationAssignment } from '../../../../../models/deviceConfigurationAssignment';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeDeviceConfigurationAssignment } from '../../../../../models/serializeDeviceConfigurationAssignment';
import { type DeviceConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration } from './deviceConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceConfigurationAssignmentItemRequestBuilderGetRequestConfiguration } from './deviceConfigurationAssignmentItemRequestBuilderGetRequestConfiguration';
import { type DeviceConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration } from './deviceConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.deviceConfiguration entity.
 */
export class DeviceConfigurationAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/assignments/{deviceConfigurationAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceConfigurationAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceConfigurationAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceConfigurationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationAssignment>(requestInfo, createDeviceConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceConfigurationAssignment, requestConfiguration?: DeviceConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationAssignment>(requestInfo, createDeviceConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceConfigurationAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceConfigurationAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationAssignment, requestConfiguration?: DeviceConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceConfigurationAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceConfigurationAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceConfigurationAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
