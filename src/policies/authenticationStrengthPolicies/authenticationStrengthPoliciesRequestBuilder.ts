import {AuthenticationStrengthPolicyCollectionResponse} from '../../models/';
import type {AuthenticationStrengthPolicy} from '../../models/authenticationStrengthPolicy';
import {createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue';
import {createAuthenticationStrengthPolicyFromDiscriminatorValue} from '../../models/createAuthenticationStrengthPolicyFromDiscriminatorValue';
import {deserializeIntoAuthenticationStrengthPolicy} from '../../models/deserializeIntoAuthenticationStrengthPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationStrengthPolicy} from '../../models/serializeAuthenticationStrengthPolicy';
import {AuthenticationStrengthPoliciesRequestBuilderGetRequestConfiguration} from './authenticationStrengthPoliciesRequestBuilderGetRequestConfiguration';
import {AuthenticationStrengthPoliciesRequestBuilderPostRequestConfiguration} from './authenticationStrengthPoliciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AuthenticationStrengthPolicyItemRequestBuilder} from './item/authenticationStrengthPolicyItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationStrengthPolicies property of the microsoft.graph.policyRoot entity.
 */
export class AuthenticationStrengthPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the authenticationStrengthPolicies property of the microsoft.graph.policyRoot entity.
     * @param authenticationStrengthPolicyId The unique identifier of authenticationStrengthPolicy
     * @returns a AuthenticationStrengthPolicyItemRequestBuilder
     */
    public byAuthenticationStrengthPolicyId(authenticationStrengthPolicyId: string) : AuthenticationStrengthPolicyItemRequestBuilder {
        if(!authenticationStrengthPolicyId) throw new Error("authenticationStrengthPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationStrengthPolicy%2Did"] = authenticationStrengthPolicyId
        return new AuthenticationStrengthPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AuthenticationStrengthPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/authenticationStrengthPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthroot-list-policies?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationStrengthPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationStrengthPolicyCollectionResponse>(requestInfo, createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new custom authenticationStrengthPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AuthenticationStrengthPolicy, requestConfiguration?: AuthenticationStrengthPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationStrengthPolicy>(requestInfo, createAuthenticationStrengthPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationStrengthPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new custom authenticationStrengthPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuthenticationStrengthPolicy, requestConfiguration?: AuthenticationStrengthPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationStrengthPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a authenticationStrengthPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationStrengthPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationStrengthPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
