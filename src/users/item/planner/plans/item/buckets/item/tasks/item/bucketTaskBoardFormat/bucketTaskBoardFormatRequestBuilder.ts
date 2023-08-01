import {createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue} from '../../../../../../../../../../models/createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue';
import {deserializeIntoPlannerBucketTaskBoardTaskFormat} from '../../../../../../../../../../models/deserializeIntoPlannerBucketTaskBoardTaskFormat';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import type {PlannerBucketTaskBoardTaskFormat} from '../../../../../../../../../../models/plannerBucketTaskBoardTaskFormat';
import {serializePlannerBucketTaskBoardTaskFormat} from '../../../../../../../../../../models/serializePlannerBucketTaskBoardTaskFormat';
import {BucketTaskBoardFormatRequestBuilderDeleteRequestConfiguration} from './bucketTaskBoardFormatRequestBuilderDeleteRequestConfiguration';
import {BucketTaskBoardFormatRequestBuilderGetRequestConfiguration} from './bucketTaskBoardFormatRequestBuilderGetRequestConfiguration';
import {BucketTaskBoardFormatRequestBuilderPatchRequestConfiguration} from './bucketTaskBoardFormatRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the bucketTaskBoardFormat property of the microsoft.graph.plannerTask entity.
 */
export class BucketTaskBoardFormatRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BucketTaskBoardFormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/planner/plans/{plannerPlan%2Did}/buckets/{plannerBucket%2Did}/tasks/{plannerTask%2Did}/bucketTaskBoardFormat{?%24select,%24expand}");
    };
    /**
     * Delete navigation property bucketTaskBoardFormat for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: BucketTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of plannerBucketTaskBoardTaskFormat object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerBucketTaskBoardTaskFormat
     * @see {@link https://learn.microsoft.com/graph/api/plannerbuckettaskboardtaskformat-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BucketTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerBucketTaskBoardTaskFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerBucketTaskBoardTaskFormat>(requestInfo, createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property bucketTaskBoardFormat in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerBucketTaskBoardTaskFormat
     * @see {@link https://learn.microsoft.com/graph/api/plannerbuckettaskboardtaskformat-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PlannerBucketTaskBoardTaskFormat | undefined, requestConfiguration?: BucketTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : Promise<PlannerBucketTaskBoardTaskFormat | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerBucketTaskBoardTaskFormat>(requestInfo, createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property bucketTaskBoardFormat for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BucketTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of plannerBucketTaskBoardTaskFormat object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BucketTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property bucketTaskBoardFormat in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PlannerBucketTaskBoardTaskFormat | undefined, requestConfiguration?: BucketTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePlannerBucketTaskBoardTaskFormat);
        return requestInfo;
    };
}
