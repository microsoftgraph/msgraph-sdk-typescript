/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPlannerFromDiscriminatorValue, serializePlanner, type Planner } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { BucketsRequestBuilderNavigationMetadata, BucketsRequestBuilderRequestsMetadata, type BucketsRequestBuilder } from './buckets/index.js';
// @ts-ignore
import { PlansRequestBuilderNavigationMetadata, PlansRequestBuilderRequestsMetadata, type PlansRequestBuilder } from './plans/index.js';
// @ts-ignore
import { TasksRequestBuilderNavigationMetadata, TasksRequestBuilderRequestsMetadata, type TasksRequestBuilder } from './tasks/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the planner singleton.
 */
export interface PlannerRequestBuilder extends BaseRequestBuilder<PlannerRequestBuilder> {
    /**
     * Provides operations to manage the buckets property of the microsoft.graph.planner entity.
     */
    get buckets(): BucketsRequestBuilder;
    /**
     * Provides operations to manage the plans property of the microsoft.graph.planner entity.
     */
    get plans(): PlansRequestBuilder;
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.planner entity.
     */
    get tasks(): TasksRequestBuilder;
    /**
     * Get planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Planner>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PlannerRequestBuilderGetQueryParameters> | undefined) : Promise<Planner | undefined>;
    /**
     * Update planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Planner>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Planner, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Planner | undefined>;
    /**
     * Get planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PlannerRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update planner
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Planner, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get planner
 */
export interface PlannerRequestBuilderGetQueryParameters {
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
export const PlannerRequestBuilderUriTemplate = "{+baseurl}/planner{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PlannerRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PlannerRequestBuilderNavigationMetadata: Record<Exclude<keyof PlannerRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    buckets: {
        requestsMetadata: BucketsRequestBuilderRequestsMetadata,
        navigationMetadata: BucketsRequestBuilderNavigationMetadata,
    },
    plans: {
        requestsMetadata: PlansRequestBuilderRequestsMetadata,
        navigationMetadata: PlansRequestBuilderNavigationMetadata,
    },
    tasks: {
        requestsMetadata: TasksRequestBuilderRequestsMetadata,
        navigationMetadata: TasksRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PlannerRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PlannerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlannerFromDiscriminatorValue,
        queryParametersMapper: PlannerRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PlannerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlannerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePlanner,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
