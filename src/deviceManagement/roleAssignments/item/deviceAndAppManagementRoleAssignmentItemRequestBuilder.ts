import { createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue } from '../../../models/createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue';
import { deserializeIntoDeviceAndAppManagementRoleAssignment } from '../../../models/deserializeIntoDeviceAndAppManagementRoleAssignment';
import { type DeviceAndAppManagementRoleAssignment } from '../../../models/deviceAndAppManagementRoleAssignment';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeDeviceAndAppManagementRoleAssignment } from '../../../models/serializeDeviceAndAppManagementRoleAssignment';
import { type DeviceAndAppManagementRoleAssignmentItemRequestBuilderDeleteRequestConfiguration } from './deviceAndAppManagementRoleAssignmentItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceAndAppManagementRoleAssignmentItemRequestBuilderGetRequestConfiguration } from './deviceAndAppManagementRoleAssignmentItemRequestBuilderGetRequestConfiguration';
import { type DeviceAndAppManagementRoleAssignmentItemRequestBuilderPatchRequestConfiguration } from './deviceAndAppManagementRoleAssignmentItemRequestBuilderPatchRequestConfiguration';
import { RoleDefinitionRequestBuilder } from './roleDefinition/roleDefinitionRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignments property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceAndAppManagementRoleAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.roleAssignment entity.
     */
    public get roleDefinition(): RoleDefinitionRequestBuilder {
        return new RoleDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceAndAppManagementRoleAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceAndAppManagementRoleAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceAndAppManagementRoleAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceAndAppManagementRoleAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAndAppManagementRoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceAndAppManagementRoleAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceAndAppManagementRoleAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAndAppManagementRoleAssignment>(requestInfo, createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceAndAppManagementRoleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAndAppManagementRoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceAndAppManagementRoleAssignment, requestConfiguration?: DeviceAndAppManagementRoleAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceAndAppManagementRoleAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAndAppManagementRoleAssignment>(requestInfo, createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceAndAppManagementRoleAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceAndAppManagementRoleAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceAndAppManagementRoleAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceAndAppManagementRoleAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceAndAppManagementRoleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceAndAppManagementRoleAssignment, requestConfiguration?: DeviceAndAppManagementRoleAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceAndAppManagementRoleAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceAndAppManagementRoleAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceAndAppManagementRoleAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceAndAppManagementRoleAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
