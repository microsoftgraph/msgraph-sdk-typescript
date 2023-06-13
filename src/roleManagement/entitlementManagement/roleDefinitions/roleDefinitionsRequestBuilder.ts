import {UnifiedRoleDefinitionCollectionResponse} from '../../../models/';
import {createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from '../../../models/createUnifiedRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleDefinition} from '../../../models/deserializeIntoUnifiedRoleDefinition';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleDefinition} from '../../../models/serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from '../../../models/unifiedRoleDefinition';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UnifiedRoleDefinitionItemRequestBuilder} from './item/unifiedRoleDefinitionItemRequestBuilder';
import {RoleDefinitionsRequestBuilderGetRequestConfiguration} from './roleDefinitionsRequestBuilderGetRequestConfiguration';
import {RoleDefinitionsRequestBuilderPostRequestConfiguration} from './roleDefinitionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity.
 */
export class RoleDefinitionsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleDefinitionId Unique identifier of the item
     * @returns a UnifiedRoleDefinitionItemRequestBuilder
     */
    public byUnifiedRoleDefinitionId(unifiedRoleDefinitionId: string) : UnifiedRoleDefinitionItemRequestBuilder {
        if(!unifiedRoleDefinitionId) throw new Error("unifiedRoleDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleDefinition%2Did"] = unifiedRoleDefinitionId
        return new UnifiedRoleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of unifiedRoleDefinition objects for the provider. The following RBAC providers are currently supported:- directory (Azure AD)- entitlement management (Azure AD)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleDefinitionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/rbacapplication-list-roledefinitions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleDefinitionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnifiedRoleDefinitionCollectionResponse>(requestInfo, createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new custom unifiedRoleDefinition object. This feature requires an Azure AD Premium P1 or P2 license.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleDefinition
     * @see {@link https://docs.microsoft.com/graph/api/rbacapplication-post-roledefinitions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnifiedRoleDefinition | undefined, requestConfiguration?: RoleDefinitionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnifiedRoleDefinition>(requestInfo, createUnifiedRoleDefinitionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a list of unifiedRoleDefinition objects for the provider. The following RBAC providers are currently supported:- directory (Azure AD)- entitlement management (Azure AD)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new custom unifiedRoleDefinition object. This feature requires an Azure AD Premium P1 or P2 license.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleDefinition | undefined, requestConfiguration?: RoleDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleDefinition);
        return requestInfo;
    };
}
