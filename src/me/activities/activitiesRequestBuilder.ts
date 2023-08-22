import {UserActivityCollectionResponse} from '../../models/';
import {createUserActivityCollectionResponseFromDiscriminatorValue} from '../../models/createUserActivityCollectionResponseFromDiscriminatorValue';
import {createUserActivityFromDiscriminatorValue} from '../../models/createUserActivityFromDiscriminatorValue';
import {deserializeIntoUserActivity} from '../../models/deserializeIntoUserActivity';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserActivity} from '../../models/serializeUserActivity';
import type {UserActivity} from '../../models/userActivity';
import {ActivitiesRequestBuilderGetRequestConfiguration} from './activitiesRequestBuilderGetRequestConfiguration';
import {ActivitiesRequestBuilderPostRequestConfiguration} from './activitiesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserActivityItemRequestBuilder} from './item/userActivityItemRequestBuilder';
import {RecentRequestBuilder} from './recent/recentRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activities property of the microsoft.graph.user entity.
 */
export class ActivitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the recent method.
     */
    public get recent(): RecentRequestBuilder {
        return new RecentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the activities property of the microsoft.graph.user entity.
     * @param userActivityId The unique identifier of userActivity
     * @returns a UserActivityItemRequestBuilder
     */
    public byUserActivityId(userActivityId: string) : UserActivityItemRequestBuilder {
        if(!userActivityId) throw new Error("userActivityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userActivity%2Did"] = userActivityId
        return new UserActivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ActivitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/activities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get activities for a given user. Unlike the recent OData function, activities without histories will be returned. The permission UserActivity.ReadWrite.CreatedByApp will apply extra filtering to the response, so that only activities created by your application are returned. This server-side filtering might result in empty pages if the user is particularly active and other applications have created more recent activities. To get your application's activities, use the nextLink property to paginate.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserActivityCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/projectrome-get-activities?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ActivitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserActivityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserActivityCollectionResponse>(requestInfo, createUserActivityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to activities for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserActivity
     */
    public post(body: UserActivity, requestConfiguration?: ActivitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserActivity | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserActivity>(requestInfo, createUserActivityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get activities for a given user. Unlike the recent OData function, activities without histories will be returned. The permission UserActivity.ReadWrite.CreatedByApp will apply extra filtering to the response, so that only activities created by your application are returned. This server-side filtering might result in empty pages if the user is particularly active and other applications have created more recent activities. To get your application's activities, use the nextLink property to paginate.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to activities for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserActivity, requestConfiguration?: ActivitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserActivity);
        return requestInfo;
    };
}
