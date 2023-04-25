import {Planner} from '../models/';
import {createPlannerFromDiscriminatorValue} from '../models/createPlannerFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {BucketsRequestBuilder} from './buckets/bucketsRequestBuilder';
import {PlannerRequestBuilderGetRequestConfiguration} from './plannerRequestBuilderGetRequestConfiguration';
import {PlannerRequestBuilderPatchRequestConfiguration} from './plannerRequestBuilderPatchRequestConfiguration';
import {PlansRequestBuilder} from './plans/plansRequestBuilder';
import {TasksRequestBuilder} from './tasks/tasksRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the planner singleton.
 */
export class PlannerRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the buckets property of the microsoft.graph.planner entity. */
    public get buckets(): BucketsRequestBuilder {
        return new BucketsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the plans property of the microsoft.graph.planner entity. */
    public get plans(): PlansRequestBuilder {
        return new PlansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tasks property of the microsoft.graph.planner entity. */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PlannerRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/planner{?%24select,%24expand}");
    };
    /**
     * Get planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Planner
     */
    public get(requestConfiguration?: PlannerRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Planner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Planner>(requestInfo, createPlannerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Planner
     */
    public patch(body: Planner | undefined, requestConfiguration?: PlannerRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Planner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Planner>(requestInfo, createPlannerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PlannerRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Planner | undefined, requestConfiguration?: PlannerRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
