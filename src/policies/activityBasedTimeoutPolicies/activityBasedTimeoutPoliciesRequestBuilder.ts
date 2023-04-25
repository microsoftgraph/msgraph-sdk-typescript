import {ActivityBasedTimeoutPolicy, ActivityBasedTimeoutPolicyCollectionResponse} from '../../models/';
import {createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue';
import {createActivityBasedTimeoutPolicyFromDiscriminatorValue} from '../../models/createActivityBasedTimeoutPolicyFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ActivityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration} from './activityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration';
import {ActivityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration} from './activityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ActivityBasedTimeoutPolicyItemRequestBuilder} from './item/activityBasedTimeoutPolicyItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activityBasedTimeoutPolicies property of the microsoft.graph.policyRoot entity.
 */
export class ActivityBasedTimeoutPoliciesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the activityBasedTimeoutPolicies property of the microsoft.graph.policyRoot entity.
     * @param activityBasedTimeoutPolicyId Unique identifier of the item
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
     * The policy that controls the idle time out for web sessions for applications.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ActivityBasedTimeoutPolicyCollectionResponse
     */
    public get(requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ActivityBasedTimeoutPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ActivityBasedTimeoutPolicyCollectionResponse>(requestInfo, createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to activityBasedTimeoutPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ActivityBasedTimeoutPolicy
     */
    public post(body: ActivityBasedTimeoutPolicy | undefined, requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ActivityBasedTimeoutPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ActivityBasedTimeoutPolicy>(requestInfo, createActivityBasedTimeoutPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The policy that controls the idle time out for web sessions for applications.
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
     * Create new navigation property to activityBasedTimeoutPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ActivityBasedTimeoutPolicy | undefined, requestConfiguration?: ActivityBasedTimeoutPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
