import {LearningCourseActivityCollectionResponse} from '../../../../models/';
import {createLearningCourseActivityCollectionResponseFromDiscriminatorValue} from '../../../../models/createLearningCourseActivityCollectionResponseFromDiscriminatorValue';
import {createLearningCourseActivityFromDiscriminatorValue} from '../../../../models/createLearningCourseActivityFromDiscriminatorValue';
import {deserializeIntoLearningCourseActivity} from '../../../../models/deserializeIntoLearningCourseActivity';
import type {LearningCourseActivity} from '../../../../models/learningCourseActivity';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeLearningCourseActivity} from '../../../../models/serializeLearningCourseActivity';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {LearningCourseActivityItemRequestBuilder} from './item/learningCourseActivityItemRequestBuilder';
import {LearningCourseActivitiesRequestBuilderGetRequestConfiguration} from './learningCourseActivitiesRequestBuilderGetRequestConfiguration';
import {LearningCourseActivitiesRequestBuilderPostRequestConfiguration} from './learningCourseActivitiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningCourseActivities property of the microsoft.graph.learningProvider entity.
 */
export class LearningCourseActivitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the learningCourseActivities property of the microsoft.graph.learningProvider entity.
     * @param learningCourseActivityId The unique identifier of learningCourseActivity
     * @returns a LearningCourseActivityItemRequestBuilder
     */
    public byLearningCourseActivityId(learningCourseActivityId: string) : LearningCourseActivityItemRequestBuilder {
        if(!learningCourseActivityId) throw new Error("learningCourseActivityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["learningCourseActivity%2Did"] = learningCourseActivityId
        return new LearningCourseActivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LearningCourseActivitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/employeeExperience/learningProviders/{learningProvider%2Did}/learningCourseActivities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get learningCourseActivities from employeeExperience
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningCourseActivityCollectionResponse
     */
    public get(requestConfiguration?: LearningCourseActivitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<LearningCourseActivityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningCourseActivityCollectionResponse>(requestInfo, createLearningCourseActivityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new learningCourseActivity object. A learning course activity can be one of two types: - Assignment- Self-initiated Use this method to create either type of activity.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningCourseActivity
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperienceuser-post-learningcourseactivities?view=graph-rest-1.0|Find more info here}
     */
    public post(body: LearningCourseActivity, requestConfiguration?: LearningCourseActivitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<LearningCourseActivity | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningCourseActivity>(requestInfo, createLearningCourseActivityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get learningCourseActivities from employeeExperience
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LearningCourseActivitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new learningCourseActivity object. A learning course activity can be one of two types: - Assignment- Self-initiated Use this method to create either type of activity.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LearningCourseActivity, requestConfiguration?: LearningCourseActivitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLearningCourseActivity);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a learningCourseActivitiesRequestBuilder
     */
    public withUrl(rawUrl: string) : LearningCourseActivitiesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LearningCourseActivitiesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
