import {UnifiedRoleManagementPolicy, UnifiedRoleManagementPolicyCollectionResponse} from '../../models/';
import {createUnifiedRoleManagementPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createUnifiedRoleManagementPolicyCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from '../../models/createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UnifiedRoleManagementPolicyItemRequestBuilder} from './item/unifiedRoleManagementPolicyItemRequestBuilder';
import {RoleManagementPoliciesRequestBuilderGetRequestConfiguration} from './roleManagementPoliciesRequestBuilderGetRequestConfiguration';
import {RoleManagementPoliciesRequestBuilderPostRequestConfiguration} from './roleManagementPoliciesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleManagementPolicies property of the microsoft.graph.policyRoot entity.
 */
export class RoleManagementPoliciesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleManagementPolicies property of the microsoft.graph.policyRoot entity.
     * @param unifiedRoleManagementPolicyId Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyItemRequestBuilder
     */
    public byUnifiedRoleManagementPolicyId(unifiedRoleManagementPolicyId: string) : UnifiedRoleManagementPolicyItemRequestBuilder {
        if(!unifiedRoleManagementPolicyId) throw new Error("unifiedRoleManagementPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicy%2Did"] = unifiedRoleManagementPolicyId
        return new UnifiedRoleManagementPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleManagementPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/roleManagementPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Specifies the various policies associated with scopes and roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyCollectionResponse
     */
    public get(requestConfiguration?: RoleManagementPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyCollectionResponse>(requestInfo, createUnifiedRoleManagementPolicyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to roleManagementPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicy
     */
    public post(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: RoleManagementPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicy>(requestInfo, createUnifiedRoleManagementPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Specifies the various policies associated with scopes and roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleManagementPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleManagementPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: RoleManagementPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
