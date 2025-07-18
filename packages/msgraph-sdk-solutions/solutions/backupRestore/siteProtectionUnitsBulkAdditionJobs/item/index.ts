/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSiteProtectionUnitsBulkAdditionJobFromDiscriminatorValue, serializeSiteProtectionUnitsBulkAdditionJob, type SiteProtectionUnitsBulkAdditionJob } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteProtectionUnitsBulkAdditionJobs property of the microsoft.graph.backupRestoreRoot entity.
 */
export interface SiteProtectionUnitsBulkAdditionJobItemRequestBuilder extends BaseRequestBuilder<SiteProtectionUnitsBulkAdditionJobItemRequestBuilder> {
    /**
     * Delete navigation property siteProtectionUnitsBulkAdditionJobs for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get siteProtectionUnitsBulkAdditionJobs from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SiteProtectionUnitsBulkAdditionJob>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SiteProtectionUnitsBulkAdditionJobItemRequestBuilderGetQueryParameters> | undefined) : Promise<SiteProtectionUnitsBulkAdditionJob | undefined>;
    /**
     * Update the navigation property siteProtectionUnitsBulkAdditionJobs in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SiteProtectionUnitsBulkAdditionJob>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: SiteProtectionUnitsBulkAdditionJob, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SiteProtectionUnitsBulkAdditionJob | undefined>;
    /**
     * Delete navigation property siteProtectionUnitsBulkAdditionJobs for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get siteProtectionUnitsBulkAdditionJobs from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SiteProtectionUnitsBulkAdditionJobItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property siteProtectionUnitsBulkAdditionJobs in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: SiteProtectionUnitsBulkAdditionJob, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get siteProtectionUnitsBulkAdditionJobs from solutions
 */
export interface SiteProtectionUnitsBulkAdditionJobItemRequestBuilderGetQueryParameters {
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
export const SiteProtectionUnitsBulkAdditionJobItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SiteProtectionUnitsBulkAdditionJobItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SiteProtectionUnitsBulkAdditionJobItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SiteProtectionUnitsBulkAdditionJobItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SiteProtectionUnitsBulkAdditionJobItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteProtectionUnitsBulkAdditionJobFromDiscriminatorValue,
        queryParametersMapper: SiteProtectionUnitsBulkAdditionJobItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SiteProtectionUnitsBulkAdditionJobItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteProtectionUnitsBulkAdditionJobFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSiteProtectionUnitsBulkAdditionJob,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
