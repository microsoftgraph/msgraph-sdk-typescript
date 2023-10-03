import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue, deserializeIntoPlannerAssignedToTaskBoardTaskFormat, serializePlannerAssignedToTaskBoardTaskFormat, type PlannerAssignedToTaskBoardTaskFormat } from '../../../../../models/plannerAssignedToTaskBoardTaskFormat';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignedToTaskBoardFormatRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface AssignedToTaskBoardFormatRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface AssignedToTaskBoardFormatRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: AssignedToTaskBoardFormatRequestBuilderGetQueryParameters;
}
export interface AssignedToTaskBoardFormatRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the assignedToTaskBoardFormat property of the microsoft.graph.plannerTask entity.
 */
export class AssignedToTaskBoardFormatRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AssignedToTaskBoardFormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/planner/tasks/{plannerTask%2Did}/assignedToTaskBoardFormat{?%24select,%24expand}");
    };
    /**
     * Delete navigation property assignedToTaskBoardFormat for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AssignedToTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a plannerAssignedToTaskBoardTaskFormat object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerAssignedToTaskBoardTaskFormat
     * @see {@link https://learn.microsoft.com/graph/api/plannerassignedtotaskboardtaskformat-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignedToTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : Promise<PlannerAssignedToTaskBoardTaskFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerAssignedToTaskBoardTaskFormat>(requestInfo, createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property assignedToTaskBoardFormat in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlannerAssignedToTaskBoardTaskFormat
     * @see {@link https://learn.microsoft.com/graph/api/plannerassignedtotaskboardtaskformat-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PlannerAssignedToTaskBoardTaskFormat, requestConfiguration?: AssignedToTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : Promise<PlannerAssignedToTaskBoardTaskFormat | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlannerAssignedToTaskBoardTaskFormat>(requestInfo, createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property assignedToTaskBoardFormat for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AssignedToTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a plannerAssignedToTaskBoardTaskFormat object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignedToTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignedToTaskBoardFormat in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PlannerAssignedToTaskBoardTaskFormat, requestConfiguration?: AssignedToTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlannerAssignedToTaskBoardTaskFormat);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignedToTaskBoardFormatRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignedToTaskBoardFormatRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignedToTaskBoardFormatRequestBuilder(rawUrl, this.requestAdapter);
    };
}
