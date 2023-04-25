import {UnifiedRoleDefinition, UnifiedRoleDefinitionCollectionResponse} from '../../../models/';
import {createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from '../../../models/createUnifiedRoleDefinitionFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
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
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleDefinitionCollectionResponse
     */
    public get(requestConfiguration?: RoleDefinitionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleDefinitionCollectionResponse>(requestInfo, createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to roleDefinitions for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleDefinition
     */
    public post(body: UnifiedRoleDefinition | undefined, requestConfiguration?: RoleDefinitionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleDefinition>(requestInfo, createUnifiedRoleDefinitionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
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
     * Create new navigation property to roleDefinitions for roleManagement
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
