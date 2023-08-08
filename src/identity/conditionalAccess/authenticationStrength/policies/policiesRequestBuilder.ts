import {AuthenticationStrengthPolicyCollectionResponse} from '../../../../models/';
import type {AuthenticationStrengthPolicy} from '../../../../models/authenticationStrengthPolicy';
import {createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue} from '../../../../models/createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue';
import {createAuthenticationStrengthPolicyFromDiscriminatorValue} from '../../../../models/createAuthenticationStrengthPolicyFromDiscriminatorValue';
import {deserializeIntoAuthenticationStrengthPolicy} from '../../../../models/deserializeIntoAuthenticationStrengthPolicy';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationStrengthPolicy} from '../../../../models/serializeAuthenticationStrengthPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AuthenticationStrengthPolicyItemRequestBuilder} from './item/authenticationStrengthPolicyItemRequestBuilder';
import {PoliciesRequestBuilderGetRequestConfiguration} from './policiesRequestBuilderGetRequestConfiguration';
import {PoliciesRequestBuilderPostRequestConfiguration} from './policiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policies property of the microsoft.graph.authenticationStrengthRoot entity.
 */
export class PoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the policies property of the microsoft.graph.authenticationStrengthRoot entity.
     * @param authenticationStrengthPolicyId Unique identifier of the item
     * @returns a AuthenticationStrengthPolicyItemRequestBuilder
     */
    public byAuthenticationStrengthPolicyId(authenticationStrengthPolicyId: string) : AuthenticationStrengthPolicyItemRequestBuilder {
        if(!authenticationStrengthPolicyId) throw new Error("authenticationStrengthPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationStrengthPolicy%2Did"] = authenticationStrengthPolicyId
        return new AuthenticationStrengthPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength/policies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicyCollectionResponse
     */
    public get(requestConfiguration?: PoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicyCollectionResponse | undefined> {
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
     * Create new navigation property to policies for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     */
    public post(body: AuthenticationStrengthPolicy, requestConfiguration?: PoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicy | undefined> {
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
     * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to policies for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuthenticationStrengthPolicy, requestConfiguration?: PoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
}
