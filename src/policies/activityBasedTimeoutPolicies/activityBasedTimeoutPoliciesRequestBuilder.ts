import {ActivityBasedTimeoutPolicyCollectionResponse} from '../../models/';
import type {ActivityBasedTimeoutPolicy} from '../../models/activityBasedTimeoutPolicy';
import {createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue';
import {createActivityBasedTimeoutPolicyFromDiscriminatorValue} from '../../models/createActivityBasedTimeoutPolicyFromDiscriminatorValue';
import {deserializeIntoActivityBasedTimeoutPolicy} from '../../models/deserializeIntoActivityBasedTimeoutPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeActivityBasedTimeoutPolicy} from '../../models/serializeActivityBasedTimeoutPolicy';
import {ActivityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration} from './activityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration';
import {ActivityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration} from './activityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ActivityBasedTimeoutPolicyItemRequestBuilder} from './item/activityBasedTimeoutPolicyItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activityBasedTimeoutPolicies property of the microsoft.graph.policyRoot entity.
 */
export class ActivityBasedTimeoutPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the activityBasedTimeoutPolicies property of the microsoft.graph.policyRoot entity.
     * @param activityBasedTimeoutPolicyId The unique identifier of activityBasedTimeoutPolicy
     * @returns a ActivityBasedTimeoutPolicyItemRequestBuilder
     */
    public byActivityBasedTimeoutPolicyId(activityBasedTimeoutPolicyId: string) : ActivityBasedTimeoutPolicyItemRequestBuilder {
        if(!activityBasedTimeoutPolicyId) throw new Error("activityBasedTimeoutPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activityBasedTimeoutPolicy%2Did"] = activityBasedTimeoutPolicyId
        return new ActivityBasedTimeoutPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ActivityBasedTimeoutPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/activityBasedTimeoutPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of activityBasedTimeoutPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityBasedTimeoutPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/activitybasedtimeoutpolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<ActivityBasedTimeoutPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ActivityBasedTimeoutPolicyCollectionResponse>(requestInfo, createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new activityBasedTimeoutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityBasedTimeoutPolicy
     * @see {@link https://learn.microsoft.com/graph/api/activitybasedtimeoutpolicy-post-activitybasedtimeoutpolicies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ActivityBasedTimeoutPolicy, requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<ActivityBasedTimeoutPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ActivityBasedTimeoutPolicy>(requestInfo, createActivityBasedTimeoutPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of activityBasedTimeoutPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new activityBasedTimeoutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ActivityBasedTimeoutPolicy, requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeActivityBasedTimeoutPolicy);
        return requestInfo;
    };
}
