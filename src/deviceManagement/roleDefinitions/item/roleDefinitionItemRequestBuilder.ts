import { createRoleDefinitionFromDiscriminatorValue } from '../../../models/createRoleDefinitionFromDiscriminatorValue';
import { deserializeIntoRoleDefinition } from '../../../models/deserializeIntoRoleDefinition';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type RoleDefinition } from '../../../models/roleDefinition';
import { serializeRoleDefinition } from '../../../models/serializeRoleDefinition';
import { RoleAssignmentsRequestBuilder } from './roleAssignments/roleAssignmentsRequestBuilder';
import { type RoleDefinitionItemRequestBuilderDeleteRequestConfiguration } from './roleDefinitionItemRequestBuilderDeleteRequestConfiguration';
import { type RoleDefinitionItemRequestBuilderGetRequestConfiguration } from './roleDefinitionItemRequestBuilderGetRequestConfiguration';
import { type RoleDefinitionItemRequestBuilderPatchRequestConfiguration } from './roleDefinitionItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleDefinitions property of the microsoft.graph.deviceManagement entity.
 */
export class RoleDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.roleDefinition entity.
     */
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RoleDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/roleDefinitions/{roleDefinition%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceAndAppManagementRoleDefinition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroledefinition-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: RoleDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the roleDefinition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleDefinition
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-roledefinition-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RoleDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleDefinition>(requestInfo, createRoleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceAndAppManagementRoleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleDefinition
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroledefinition-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: RoleDefinition, requestConfiguration?: RoleDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RoleDefinition | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleDefinition>(requestInfo, createRoleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceAndAppManagementRoleDefinition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RoleDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the roleDefinition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceAndAppManagementRoleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RoleDefinition, requestConfiguration?: RoleDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRoleDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a RoleDefinitionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleDefinitionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleDefinitionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
