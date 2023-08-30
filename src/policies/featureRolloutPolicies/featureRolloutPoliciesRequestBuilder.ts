import {FeatureRolloutPolicyCollectionResponse} from '../../models/';
import {createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue';
import {createFeatureRolloutPolicyFromDiscriminatorValue} from '../../models/createFeatureRolloutPolicyFromDiscriminatorValue';
import {deserializeIntoFeatureRolloutPolicy} from '../../models/deserializeIntoFeatureRolloutPolicy';
import type {FeatureRolloutPolicy} from '../../models/featureRolloutPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeFeatureRolloutPolicy} from '../../models/serializeFeatureRolloutPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration} from './featureRolloutPoliciesRequestBuilderGetRequestConfiguration';
import {FeatureRolloutPoliciesRequestBuilderPostRequestConfiguration} from './featureRolloutPoliciesRequestBuilderPostRequestConfiguration';
import {FeatureRolloutPolicyItemRequestBuilder} from './item/featureRolloutPolicyItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.policyRoot entity.
 */
export class FeatureRolloutPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.policyRoot entity.
     * @param featureRolloutPolicyId The unique identifier of featureRolloutPolicy
     * @returns a FeatureRolloutPolicyItemRequestBuilder
     */
    public byFeatureRolloutPolicyId(featureRolloutPolicyId: string) : FeatureRolloutPolicyItemRequestBuilder {
        if(!featureRolloutPolicyId) throw new Error("featureRolloutPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["featureRolloutPolicy%2Did"] = featureRolloutPolicyId
        return new FeatureRolloutPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FeatureRolloutPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/featureRolloutPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of featureRolloutPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FeatureRolloutPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/featurerolloutpolicies-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<FeatureRolloutPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FeatureRolloutPolicyCollectionResponse>(requestInfo, createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new featureRolloutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FeatureRolloutPolicy
     * @see {@link https://learn.microsoft.com/graph/api/featurerolloutpolicies-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: FeatureRolloutPolicy, requestConfiguration?: FeatureRolloutPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<FeatureRolloutPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FeatureRolloutPolicy>(requestInfo, createFeatureRolloutPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of featureRolloutPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new featureRolloutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FeatureRolloutPolicy, requestConfiguration?: FeatureRolloutPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeFeatureRolloutPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a featureRolloutPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : FeatureRolloutPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FeatureRolloutPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
