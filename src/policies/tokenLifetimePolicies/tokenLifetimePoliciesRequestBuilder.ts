import {TokenLifetimePolicyCollectionResponse} from '../../models/';
import {createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue} from '../../models/createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from '../../models/createTokenLifetimePolicyFromDiscriminatorValue';
import {deserializeIntoTokenLifetimePolicy} from '../../models/deserializeIntoTokenLifetimePolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeTokenLifetimePolicy} from '../../models/serializeTokenLifetimePolicy';
import type {TokenLifetimePolicy} from '../../models/tokenLifetimePolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TokenLifetimePolicyItemRequestBuilder} from './item/tokenLifetimePolicyItemRequestBuilder';
import {TokenLifetimePoliciesRequestBuilderGetRequestConfiguration} from './tokenLifetimePoliciesRequestBuilderGetRequestConfiguration';
import {TokenLifetimePoliciesRequestBuilderPostRequestConfiguration} from './tokenLifetimePoliciesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.policyRoot entity.
 */
export class TokenLifetimePoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.policyRoot entity.
     * @param tokenLifetimePolicyId Unique identifier of the item
     * @returns a TokenLifetimePolicyItemRequestBuilder
     */
    public byTokenLifetimePolicyId(tokenLifetimePolicyId: string) : TokenLifetimePolicyItemRequestBuilder {
        if(!tokenLifetimePolicyId) throw new Error("tokenLifetimePolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenLifetimePolicy%2Did"] = tokenLifetimePolicyId
        return new TokenLifetimePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TokenLifetimePoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/tokenLifetimePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of tokenLifetimePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TokenLifetimePoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<TokenLifetimePolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TokenLifetimePolicyCollectionResponse>(requestInfo, createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new tokenLifetimePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-post-tokenlifetimepolicies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TokenLifetimePolicy, requestConfiguration?: TokenLifetimePoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<TokenLifetimePolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TokenLifetimePolicy>(requestInfo, createTokenLifetimePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of tokenLifetimePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TokenLifetimePoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new tokenLifetimePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TokenLifetimePolicy, requestConfiguration?: TokenLifetimePoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTokenLifetimePolicy);
        return requestInfo;
    };
}
