import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createUnifiedRoleDefinitionFromDiscriminatorValue, deserializeIntoUnifiedRoleDefinition, serializeUnifiedRoleDefinition, type UnifiedRoleDefinition } from '../../../../models/unifiedRoleDefinition';
import { InheritsPermissionsFromRequestBuilder } from './inheritsPermissionsFrom/inheritsPermissionsFromRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface UnifiedRoleDefinitionItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: UnifiedRoleDefinitionItemRequestBuilderGetQueryParameters;
}
export interface UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity.
 */
export class UnifiedRoleDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the inheritsPermissionsFrom property of the microsoft.graph.unifiedRoleDefinition entity.
     */
    public get inheritsPermissionsFrom(): InheritsPermissionsFromRequestBuilder {
        return new InheritsPermissionsFromRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UnifiedRoleDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a unifiedRoleDefinition object. You cannot delete built-in roles. This feature requires an Azure AD Premium P1 or P2 license.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroledefinition-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a unifiedRoleDefinition object. The following role-based access control (RBAC) providers are currently supported:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinition
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroledefinition-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleDefinition>(requestInfo, createUnifiedRoleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a unifiedRoleDefinition object. You cannot update built-in roles. This feature requires an Azure AD Premium P1 or P2 license.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinition
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroledefinition-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: UnifiedRoleDefinition, requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleDefinition>(requestInfo, createUnifiedRoleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a unifiedRoleDefinition object. You cannot delete built-in roles. This feature requires an Azure AD Premium P1 or P2 license.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a unifiedRoleDefinition object. The following role-based access control (RBAC) providers are currently supported:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a unifiedRoleDefinition object. You cannot update built-in roles. This feature requires an Azure AD Premium P1 or P2 license.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleDefinition, requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UnifiedRoleDefinitionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedRoleDefinitionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedRoleDefinitionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
