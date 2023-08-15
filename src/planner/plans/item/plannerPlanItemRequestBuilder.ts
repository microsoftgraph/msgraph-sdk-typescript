import {createPlannerPlanFromDiscriminatorValue} from '../../../models/createPlannerPlanFromDiscriminatorValue';
import {deserializeIntoPlannerPlan} from '../../../models/deserializeIntoPlannerPlan';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {PlannerPlan} from '../../../models/plannerPlan';
import {serializePlannerPlan} from '../../../models/serializePlannerPlan';
import {BucketsRequestBuilder} from './buckets/bucketsRequestBuilder';
import {DetailsRequestBuilder} from './details/detailsRequestBuilder';
import {PlannerPlanItemRequestBuilderDeleteRequestConfiguration} from './plannerPlanItemRequestBuilderDeleteRequestConfiguration';
import {PlannerPlanItemRequestBuilderGetRequestConfiguration} from './plannerPlanItemRequestBuilderGetRequestConfiguration';
import {PlannerPlanItemRequestBuilderPatchRequestConfiguration} from './plannerPlanItemRequestBuilderPatchRequestConfiguration';
import {TasksRequestBuilder} from './tasks/tasksRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the plans property of the microsoft.graph.planner entity.
 */
export class PlannerPlanItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the buckets property of the microsoft.graph.plannerPlan entity.
     */
    public get buckets(): BucketsRequestBuilder {
        return new BucketsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the details property of the microsoft.graph.plannerPlan entity.
     */
    public get details(): DetailsRequestBuilder {
        return new DetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.plannerPlan entity.
     */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PlannerPlanItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/planner/plans/{plannerPlan%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a plannerPlan object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/plannerplan-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PlannerPlanItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a plannerplan object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerPlan
     * @see {@link https://learn.microsoft.com/graph/api/plannerplan-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PlannerPlanItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerPlan | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerPlan>(requestInfo, createPlannerPlanFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a plannerPlan object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerPlan
     * @see {@link https://learn.microsoft.com/graph/api/plannerplan-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PlannerPlan, requestConfiguration?: PlannerPlanItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PlannerPlan | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerPlan>(requestInfo, createPlannerPlanFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a plannerPlan object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PlannerPlanItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a plannerplan object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PlannerPlanItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a plannerPlan object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PlannerPlan, requestConfiguration?: PlannerPlanItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlannerPlan);
        return requestInfo;
    };
}
