import { type PlannerTaskCollectionResponse } from '../../../../../../models/';
import { createPlannerTaskCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createPlannerTaskCollectionResponseFromDiscriminatorValue';
import { createPlannerTaskFromDiscriminatorValue } from '../../../../../../models/createPlannerTaskFromDiscriminatorValue';
import { deserializeIntoPlannerTask } from '../../../../../../models/deserializeIntoPlannerTask';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type PlannerTask } from '../../../../../../models/plannerTask';
import { serializePlannerTask } from '../../../../../../models/serializePlannerTask';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PlannerTaskItemRequestBuilder } from './item/plannerTaskItemRequestBuilder';
import { type TasksRequestBuilderGetRequestConfiguration } from './tasksRequestBuilderGetRequestConfiguration';
import { type TasksRequestBuilderPostRequestConfiguration } from './tasksRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.plannerPlan entity.
 */
export class TasksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.plannerPlan entity.
     * @param plannerTaskId The unique identifier of plannerTask
     * @returns a PlannerTaskItemRequestBuilder
     */
    public byPlannerTaskId(plannerTaskId: string) : PlannerTaskItemRequestBuilder {
        if(!plannerTaskId) throw new Error("plannerTaskId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["plannerTask%2Did"] = plannerTaskId
        return new PlannerTaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TasksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/planner/plans/{plannerPlan%2Did}/tasks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of plannerTask objects associated with a plannerPlan object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerTaskCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/plannerplan-list-tasks?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerTaskCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerTaskCollectionResponse>(requestInfo, createPlannerTaskCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to tasks for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerTask
     */
    public post(body: PlannerTask, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : Promise<PlannerTask | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerTask>(requestInfo, createPlannerTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of plannerTask objects associated with a plannerPlan object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to tasks for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PlannerTask, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlannerTask);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a tasksRequestBuilder
     */
    public withUrl(rawUrl: string) : TasksRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TasksRequestBuilder(rawUrl, this.requestAdapter);
    };
}
