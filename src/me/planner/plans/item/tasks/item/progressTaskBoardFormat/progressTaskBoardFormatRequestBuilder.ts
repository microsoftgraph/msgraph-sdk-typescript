import {createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue} from '../../../../../../../models/createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue';
import {deserializeIntoPlannerProgressTaskBoardTaskFormat} from '../../../../../../../models/deserializeIntoPlannerProgressTaskBoardTaskFormat';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {PlannerProgressTaskBoardTaskFormat} from '../../../../../../../models/plannerProgressTaskBoardTaskFormat';
import {serializePlannerProgressTaskBoardTaskFormat} from '../../../../../../../models/serializePlannerProgressTaskBoardTaskFormat';
import {ProgressTaskBoardFormatRequestBuilderDeleteRequestConfiguration} from './progressTaskBoardFormatRequestBuilderDeleteRequestConfiguration';
import {ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration} from './progressTaskBoardFormatRequestBuilderGetRequestConfiguration';
import {ProgressTaskBoardFormatRequestBuilderPatchRequestConfiguration} from './progressTaskBoardFormatRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the progressTaskBoardFormat property of the microsoft.graph.plannerTask entity.
 */
export class ProgressTaskBoardFormatRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ProgressTaskBoardFormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/planner/plans/{plannerPlan%2Did}/tasks/{plannerTask%2Did}/progressTaskBoardFormat{?%24select,%24expand}");
    };
    /**
     * Delete navigation property progressTaskBoardFormat for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerProgressTaskBoardTaskFormat
     * @see {@link https://docs.microsoft.com/graph/api/plannerprogresstaskboardtaskformat-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerProgressTaskBoardTaskFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerProgressTaskBoardTaskFormat>(requestInfo, createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property progressTaskBoardFormat in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerProgressTaskBoardTaskFormat
     * @see {@link https://docs.microsoft.com/graph/api/plannerprogresstaskboardtaskformat-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PlannerProgressTaskBoardTaskFormat | undefined, requestConfiguration?: ProgressTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : Promise<PlannerProgressTaskBoardTaskFormat | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerProgressTaskBoardTaskFormat>(requestInfo, createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property progressTaskBoardFormat for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property progressTaskBoardFormat in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PlannerProgressTaskBoardTaskFormat | undefined, requestConfiguration?: ProgressTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePlannerProgressTaskBoardTaskFormat);
        return requestInfo;
    };
}
