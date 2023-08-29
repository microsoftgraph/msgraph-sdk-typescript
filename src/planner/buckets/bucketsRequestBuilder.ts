import {PlannerBucketCollectionResponse} from '../../models/';
import {createPlannerBucketCollectionResponseFromDiscriminatorValue} from '../../models/createPlannerBucketCollectionResponseFromDiscriminatorValue';
import {createPlannerBucketFromDiscriminatorValue} from '../../models/createPlannerBucketFromDiscriminatorValue';
import {deserializeIntoPlannerBucket} from '../../models/deserializeIntoPlannerBucket';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {PlannerBucket} from '../../models/plannerBucket';
import {serializePlannerBucket} from '../../models/serializePlannerBucket';
import {BucketsRequestBuilderGetRequestConfiguration} from './bucketsRequestBuilderGetRequestConfiguration';
import {BucketsRequestBuilderPostRequestConfiguration} from './bucketsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PlannerBucketItemRequestBuilder} from './item/plannerBucketItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the buckets property of the microsoft.graph.planner entity.
 */
export class BucketsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the buckets property of the microsoft.graph.planner entity.
     * @param plannerBucketId The unique identifier of plannerBucket
     * @returns a PlannerBucketItemRequestBuilder
     */
    public byPlannerBucketId(plannerBucketId: string) : PlannerBucketItemRequestBuilder {
        if(!plannerBucketId) throw new Error("plannerBucketId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["plannerBucket%2Did"] = plannerBucketId
        return new PlannerBucketItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BucketsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/planner/buckets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of plannerbucket objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerBucketCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/planner-list-buckets?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BucketsRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerBucketCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerBucketCollectionResponse>(requestInfo, createPlannerBucketCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new plannerBucket object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerBucket
     * @see {@link https://learn.microsoft.com/graph/api/planner-post-buckets?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PlannerBucket, requestConfiguration?: BucketsRequestBuilderPostRequestConfiguration | undefined) : Promise<PlannerBucket | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerBucket>(requestInfo, createPlannerBucketFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of plannerbucket objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BucketsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new plannerBucket object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PlannerBucket, requestConfiguration?: BucketsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlannerBucket);
        return requestInfo;
    };
}
