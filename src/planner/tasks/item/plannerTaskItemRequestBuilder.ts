import {createPlannerTaskFromDiscriminatorValue} from '../../../models/createPlannerTaskFromDiscriminatorValue';
import {deserializeIntoPlannerTask} from '../../../models/deserializeIntoPlannerTask';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {PlannerTask} from '../../../models/plannerTask';
import {serializePlannerTask} from '../../../models/serializePlannerTask';
import {AssignedToTaskBoardFormatRequestBuilder} from './assignedToTaskBoardFormat/assignedToTaskBoardFormatRequestBuilder';
import {BucketTaskBoardFormatRequestBuilder} from './bucketTaskBoardFormat/bucketTaskBoardFormatRequestBuilder';
import {DetailsRequestBuilder} from './details/detailsRequestBuilder';
import {PlannerTaskItemRequestBuilderDeleteRequestConfiguration} from './plannerTaskItemRequestBuilderDeleteRequestConfiguration';
import {PlannerTaskItemRequestBuilderGetRequestConfiguration} from './plannerTaskItemRequestBuilderGetRequestConfiguration';
import {PlannerTaskItemRequestBuilderPatchRequestConfiguration} from './plannerTaskItemRequestBuilderPatchRequestConfiguration';
import {ProgressTaskBoardFormatRequestBuilder} from './progressTaskBoardFormat/progressTaskBoardFormatRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.planner entity.
 */
export class PlannerTaskItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the assignedToTaskBoardFormat property of the microsoft.graph.plannerTask entity.
     */
    public get assignedToTaskBoardFormat(): AssignedToTaskBoardFormatRequestBuilder {
        return new AssignedToTaskBoardFormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the bucketTaskBoardFormat property of the microsoft.graph.plannerTask entity.
     */
    public get bucketTaskBoardFormat(): BucketTaskBoardFormatRequestBuilder {
        return new BucketTaskBoardFormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the details property of the microsoft.graph.plannerTask entity.
     */
    public get details(): DetailsRequestBuilder {
        return new DetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the progressTaskBoardFormat property of the microsoft.graph.plannerTask entity.
     */
    public get progressTaskBoardFormat(): ProgressTaskBoardFormatRequestBuilder {
        return new ProgressTaskBoardFormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PlannerTaskItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/planner/tasks/{plannerTask%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a plannerTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/plannertask-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PlannerTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of plannerTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerTask
     * @see {@link https://learn.microsoft.com/graph/api/plannertask-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PlannerTaskItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerTask | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerTask>(requestInfo, createPlannerTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property tasks in planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerTask
     * @see {@link https://learn.microsoft.com/graph/api/plannertask-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PlannerTask, requestConfiguration?: PlannerTaskItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PlannerTask | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerTask>(requestInfo, createPlannerTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a plannerTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PlannerTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of plannerTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PlannerTaskItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property tasks in planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PlannerTask, requestConfiguration?: PlannerTaskItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlannerTask);
        return requestInfo;
    };
}
