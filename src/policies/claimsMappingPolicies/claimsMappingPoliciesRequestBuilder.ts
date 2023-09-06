import { type ClaimsMappingPolicyCollectionResponse } from '../../models/';
import { type ClaimsMappingPolicy } from '../../models/claimsMappingPolicy';
import { createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue } from '../../models/createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue';
import { createClaimsMappingPolicyFromDiscriminatorValue } from '../../models/createClaimsMappingPolicyFromDiscriminatorValue';
import { deserializeIntoClaimsMappingPolicy } from '../../models/deserializeIntoClaimsMappingPolicy';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeClaimsMappingPolicy } from '../../models/serializeClaimsMappingPolicy';
import { type ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration } from './claimsMappingPoliciesRequestBuilderGetRequestConfiguration';
import { type ClaimsMappingPoliciesRequestBuilderPostRequestConfiguration } from './claimsMappingPoliciesRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ClaimsMappingPolicyItemRequestBuilder } from './item/claimsMappingPolicyItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.policyRoot entity.
 */
export class ClaimsMappingPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.policyRoot entity.
     * @param claimsMappingPolicyId The unique identifier of claimsMappingPolicy
     * @returns a ClaimsMappingPolicyItemRequestBuilder
     */
    public byClaimsMappingPolicyId(claimsMappingPolicyId: string) : ClaimsMappingPolicyItemRequestBuilder {
        if(!claimsMappingPolicyId) throw new Error("claimsMappingPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["claimsMappingPolicy%2Did"] = claimsMappingPolicyId
        return new ClaimsMappingPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ClaimsMappingPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/claimsMappingPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of claimsMappingPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ClaimsMappingPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/claimsmappingpolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<ClaimsMappingPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ClaimsMappingPolicyCollectionResponse>(requestInfo, createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new claimsMappingPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ClaimsMappingPolicy
     * @see {@link https://learn.microsoft.com/graph/api/claimsmappingpolicy-post-claimsmappingpolicies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ClaimsMappingPolicy, requestConfiguration?: ClaimsMappingPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<ClaimsMappingPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ClaimsMappingPolicy>(requestInfo, createClaimsMappingPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of claimsMappingPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new claimsMappingPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ClaimsMappingPolicy, requestConfiguration?: ClaimsMappingPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeClaimsMappingPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a claimsMappingPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : ClaimsMappingPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ClaimsMappingPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
