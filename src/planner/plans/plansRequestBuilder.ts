import {PlannerPlanCollectionResponse} from '../../models/';
import {createPlannerPlanCollectionResponseFromDiscriminatorValue} from '../../models/createPlannerPlanCollectionResponseFromDiscriminatorValue';
import {createPlannerPlanFromDiscriminatorValue} from '../../models/createPlannerPlanFromDiscriminatorValue';
import {deserializeIntoPlannerPlan} from '../../models/deserializeIntoPlannerPlan';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {PlannerPlan} from '../../models/plannerPlan';
import {serializePlannerPlan} from '../../models/serializePlannerPlan';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PlannerPlanItemRequestBuilder} from './item/plannerPlanItemRequestBuilder';
import {PlansRequestBuilderGetRequestConfiguration} from './plansRequestBuilderGetRequestConfiguration';
import {PlansRequestBuilderPostRequestConfiguration} from './plansRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the plans property of the microsoft.graph.planner entity.
 */
export class PlansRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the plans property of the microsoft.graph.planner entity.
     * @param plannerPlanId Unique identifier of the item
     * @returns a PlannerPlanItemRequestBuilder
     */
    public byPlannerPlanId(plannerPlanId: string) : PlannerPlanItemRequestBuilder {
        if(!plannerPlanId) throw new Error("plannerPlanId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["plannerPlan%2Did"] = plannerPlanId
        return new PlannerPlanItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PlansRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/planner/plans{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of plannerPlan objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerPlanCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/planner-list-plans?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PlansRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerPlanCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerPlanCollectionResponse>(requestInfo, createPlannerPlanCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Use this API to create a new plannerPlan.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerPlan
     * @see {@link https://learn.microsoft.com/graph/api/planner-post-plans?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PlannerPlan | undefined, requestConfiguration?: PlansRequestBuilderPostRequestConfiguration | undefined) : Promise<PlannerPlan | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerPlan>(requestInfo, createPlannerPlanFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of plannerPlan objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PlansRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to create a new plannerPlan.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PlannerPlan | undefined, requestConfiguration?: PlansRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePlannerPlan);
        return requestInfo;
    };
}
