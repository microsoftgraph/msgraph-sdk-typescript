/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTaskReportCollectionResponseFromDiscriminatorValue, type TaskReportCollectionResponse } from '@microsoft/msgraph-sdk/models/identityGovernance/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TaskReportItemRequestBuilderNavigationMetadata, TaskReportItemRequestBuilderRequestsMetadata, type TaskReportItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata, type MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder } from './microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskReports property of the microsoft.graph.identityGovernance.workflow entity.
 */
export interface TaskReportsRequestBuilder extends BaseRequestBuilder<TaskReportsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the taskReports property of the microsoft.graph.identityGovernance.workflow entity.
     * @param taskReportId The unique identifier of taskReport
     * @returns {TaskReportItemRequestBuilder}
     */
     byTaskReportId(taskReportId: string) : TaskReportItemRequestBuilder;
    /**
     * Get a list of the taskReport objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TaskReportCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-workflow-list-taskreports?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TaskReportsRequestBuilderGetQueryParameters> | undefined) : Promise<TaskReportCollectionResponse | undefined>;
    /**
     * Provides operations to call the summary method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns {MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder}
     */
     microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, startDateTime: Date | undefined) : MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder;
    /**
     * Get a list of the taskReport objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TaskReportsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of the taskReport objects and their properties.
 */
export interface TaskReportsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const TaskReportsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/taskReports{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TaskReportsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TaskReportsRequestBuilderNavigationMetadata: Record<Exclude<keyof TaskReportsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTaskReportId: {
        requestsMetadata: TaskReportItemRequestBuilderRequestsMetadata,
        navigationMetadata: TaskReportItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["taskReport%2Did"],
    },
    microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime: {
        requestsMetadata: MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata,
        pathParametersMappings: ["endDateTime", "startDateTime"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TaskReportsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TaskReportsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTaskReportCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TaskReportsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
