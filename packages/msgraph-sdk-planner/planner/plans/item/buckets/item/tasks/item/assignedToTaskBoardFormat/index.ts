/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue, serializePlannerAssignedToTaskBoardTaskFormat, type PlannerAssignedToTaskBoardTaskFormat } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignedToTaskBoardFormat property of the microsoft.graph.plannerTask entity.
 */
export interface AssignedToTaskBoardFormatRequestBuilder extends BaseRequestBuilder<AssignedToTaskBoardFormatRequestBuilder> {
    /**
     * Delete navigation property assignedToTaskBoardFormat for planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PlannerAssignedToTaskBoardTaskFormat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AssignedToTaskBoardFormatRequestBuilderGetQueryParameters> | undefined) : Promise<PlannerAssignedToTaskBoardTaskFormat | undefined>;
    /**
     * Update the navigation property assignedToTaskBoardFormat in planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PlannerAssignedToTaskBoardTaskFormat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: PlannerAssignedToTaskBoardTaskFormat, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PlannerAssignedToTaskBoardTaskFormat | undefined>;
    /**
     * Delete navigation property assignedToTaskBoardFormat for planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignedToTaskBoardFormatRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property assignedToTaskBoardFormat in planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PlannerAssignedToTaskBoardTaskFormat, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
 */
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
/**
 * Uri template for the request builder.
 */
export const AssignedToTaskBoardFormatRequestBuilderUriTemplate = "{+baseurl}/planner/plans/{plannerPlan%2Did}/buckets/{plannerBucket%2Did}/tasks/{plannerTask%2Did}/assignedToTaskBoardFormat{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AssignedToTaskBoardFormatRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignedToTaskBoardFormatRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AssignedToTaskBoardFormatRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AssignedToTaskBoardFormatRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue,
        queryParametersMapper: AssignedToTaskBoardFormatRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AssignedToTaskBoardFormatRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePlannerAssignedToTaskBoardTaskFormat,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
