import { type ConditionalAccessPolicyCollectionResponse } from '../../models/';
import { type ConditionalAccessPolicy } from '../../models/conditionalAccessPolicy';
import { createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue } from '../../models/createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue';
import { createConditionalAccessPolicyFromDiscriminatorValue } from '../../models/createConditionalAccessPolicyFromDiscriminatorValue';
import { deserializeIntoConditionalAccessPolicy } from '../../models/deserializeIntoConditionalAccessPolicy';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeConditionalAccessPolicy } from '../../models/serializeConditionalAccessPolicy';
import { type ConditionalAccessPoliciesRequestBuilderGetRequestConfiguration } from './conditionalAccessPoliciesRequestBuilderGetRequestConfiguration';
import { type ConditionalAccessPoliciesRequestBuilderPostRequestConfiguration } from './conditionalAccessPoliciesRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ConditionalAccessPolicyItemRequestBuilder } from './item/conditionalAccessPolicyItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the conditionalAccessPolicies property of the microsoft.graph.policyRoot entity.
 */
export class ConditionalAccessPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the conditionalAccessPolicies property of the microsoft.graph.policyRoot entity.
     * @param conditionalAccessPolicyId The unique identifier of conditionalAccessPolicy
     * @returns a ConditionalAccessPolicyItemRequestBuilder
     */
    public byConditionalAccessPolicyId(conditionalAccessPolicyId: string) : ConditionalAccessPolicyItemRequestBuilder {
        if(!conditionalAccessPolicyId) throw new Error("conditionalAccessPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conditionalAccessPolicy%2Did"] = conditionalAccessPolicyId
        return new ConditionalAccessPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ConditionalAccessPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/conditionalAccessPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The custom rules that define an access scenario.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicyCollectionResponse
     */
    public get(requestConfiguration?: ConditionalAccessPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<ConditionalAccessPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessPolicyCollectionResponse>(requestInfo, createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to conditionalAccessPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicy
     */
    public post(body: ConditionalAccessPolicy, requestConfiguration?: ConditionalAccessPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<ConditionalAccessPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessPolicy>(requestInfo, createConditionalAccessPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * The custom rules that define an access scenario.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConditionalAccessPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to conditionalAccessPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ConditionalAccessPolicy, requestConfiguration?: ConditionalAccessPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConditionalAccessPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a conditionalAccessPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : ConditionalAccessPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ConditionalAccessPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
