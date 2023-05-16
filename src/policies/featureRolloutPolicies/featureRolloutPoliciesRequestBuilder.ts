import {FeatureRolloutPolicyCollectionResponse} from '../../models/';
import {createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue';
import {createFeatureRolloutPolicyFromDiscriminatorValue} from '../../models/createFeatureRolloutPolicyFromDiscriminatorValue';
import {deserializeIntoFeatureRolloutPolicy} from '../../models/deserializeIntoFeatureRolloutPolicy';
import {FeatureRolloutPolicy} from '../../models/featureRolloutPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeFeatureRolloutPolicy} from '../../models/serializeFeatureRolloutPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration} from './featureRolloutPoliciesRequestBuilderGetRequestConfiguration';
import {FeatureRolloutPoliciesRequestBuilderPostRequestConfiguration} from './featureRolloutPoliciesRequestBuilderPostRequestConfiguration';
import {FeatureRolloutPolicyItemRequestBuilder} from './item/featureRolloutPolicyItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.policyRoot entity.
 */
export class FeatureRolloutPoliciesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.policyRoot entity.
     * @param featureRolloutPolicyId Unique identifier of the item
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of FeatureRolloutPolicyCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/featurerolloutpolicies-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<FeatureRolloutPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<FeatureRolloutPolicyCollectionResponse>(requestInfo, createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new featureRolloutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of FeatureRolloutPolicy
     * @see {@link https://docs.microsoft.com/graph/api/featurerolloutpolicies-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: FeatureRolloutPolicy | undefined, requestConfiguration?: FeatureRolloutPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<FeatureRolloutPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<FeatureRolloutPolicy>(requestInfo, createFeatureRolloutPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPostRequestInformation(body: FeatureRolloutPolicy | undefined, requestConfiguration?: FeatureRolloutPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeFeatureRolloutPolicy);
        return requestInfo;
    };
}
