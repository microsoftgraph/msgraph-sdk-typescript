import {TokenIssuancePolicyCollectionResponse} from '../../models/';
import {createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue} from '../../models/createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from '../../models/createTokenIssuancePolicyFromDiscriminatorValue';
import {deserializeIntoTokenIssuancePolicy} from '../../models/deserializeIntoTokenIssuancePolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeTokenIssuancePolicy} from '../../models/serializeTokenIssuancePolicy';
import type {TokenIssuancePolicy} from '../../models/tokenIssuancePolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TokenIssuancePolicyItemRequestBuilder} from './item/tokenIssuancePolicyItemRequestBuilder';
import {TokenIssuancePoliciesRequestBuilderGetRequestConfiguration} from './tokenIssuancePoliciesRequestBuilderGetRequestConfiguration';
import {TokenIssuancePoliciesRequestBuilderPostRequestConfiguration} from './tokenIssuancePoliciesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.policyRoot entity.
 */
export class TokenIssuancePoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.policyRoot entity.
     * @param tokenIssuancePolicyId Unique identifier of the item
     * @returns a TokenIssuancePolicyItemRequestBuilder
     */
    public byTokenIssuancePolicyId(tokenIssuancePolicyId: string) : TokenIssuancePolicyItemRequestBuilder {
        if(!tokenIssuancePolicyId) throw new Error("tokenIssuancePolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenIssuancePolicy%2Did"] = tokenIssuancePolicyId
        return new TokenIssuancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TokenIssuancePoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/tokenIssuancePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of tokenIssuancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenIssuancePolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TokenIssuancePoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<TokenIssuancePolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TokenIssuancePolicyCollectionResponse>(requestInfo, createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new tokenIssuancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenIssuancePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-post-tokenissuancepolicy?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TokenIssuancePolicy | undefined, requestConfiguration?: TokenIssuancePoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<TokenIssuancePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TokenIssuancePolicy>(requestInfo, createTokenIssuancePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of tokenIssuancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TokenIssuancePoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new tokenIssuancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TokenIssuancePolicy | undefined, requestConfiguration?: TokenIssuancePoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTokenIssuancePolicy);
        return requestInfo;
    };
}
