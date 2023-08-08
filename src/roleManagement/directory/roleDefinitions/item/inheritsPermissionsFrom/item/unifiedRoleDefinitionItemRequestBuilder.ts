import {createUnifiedRoleDefinitionFromDiscriminatorValue} from '../../../../../../models/createUnifiedRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleDefinition} from '../../../../../../models/deserializeIntoUnifiedRoleDefinition';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleDefinition} from '../../../../../../models/serializeUnifiedRoleDefinition';
import type {UnifiedRoleDefinition} from '../../../../../../models/unifiedRoleDefinition';
import {UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration} from './unifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the inheritsPermissionsFrom property of the microsoft.graph.unifiedRoleDefinition entity.
 */
export class UnifiedRoleDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnifiedRoleDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition%2Did}/inheritsPermissionsFrom/{unifiedRoleDefinition%2Did1}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property inheritsPermissionsFrom for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
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
     * Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinition
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
     * Update the navigation property inheritsPermissionsFrom in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinition
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
     * Delete navigation property inheritsPermissionsFrom for roleManagement
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
     * Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
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
     * Update the navigation property inheritsPermissionsFrom in roleManagement
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
}
