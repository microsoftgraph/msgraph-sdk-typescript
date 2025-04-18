/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGranularMailboxRestoreArtifactFromDiscriminatorValue, serializeGranularMailboxRestoreArtifact, type GranularMailboxRestoreArtifact } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { RestorePointRequestBuilderRequestsMetadata, type RestorePointRequestBuilder } from './restorePoint/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the granularMailboxRestoreArtifacts property of the microsoft.graph.exchangeRestoreSession entity.
 */
export interface GranularMailboxRestoreArtifactItemRequestBuilder extends BaseRequestBuilder<GranularMailboxRestoreArtifactItemRequestBuilder> {
    /**
     * Provides operations to manage the restorePoint property of the microsoft.graph.restoreArtifactBase entity.
     */
    get restorePoint(): RestorePointRequestBuilder;
    /**
     * Delete navigation property granularMailboxRestoreArtifacts for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get granularMailboxRestoreArtifacts from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GranularMailboxRestoreArtifact>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GranularMailboxRestoreArtifactItemRequestBuilderGetQueryParameters> | undefined) : Promise<GranularMailboxRestoreArtifact | undefined>;
    /**
     * Update the navigation property granularMailboxRestoreArtifacts in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GranularMailboxRestoreArtifact>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: GranularMailboxRestoreArtifact, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GranularMailboxRestoreArtifact | undefined>;
    /**
     * Delete navigation property granularMailboxRestoreArtifacts for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get granularMailboxRestoreArtifacts from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GranularMailboxRestoreArtifactItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property granularMailboxRestoreArtifacts in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: GranularMailboxRestoreArtifact, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get granularMailboxRestoreArtifacts from solutions
 */
export interface GranularMailboxRestoreArtifactItemRequestBuilderGetQueryParameters {
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
export const GranularMailboxRestoreArtifactItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession%2Did}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GranularMailboxRestoreArtifactItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GranularMailboxRestoreArtifactItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GranularMailboxRestoreArtifactItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    restorePoint: {
        requestsMetadata: RestorePointRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GranularMailboxRestoreArtifactItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GranularMailboxRestoreArtifactItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GranularMailboxRestoreArtifactItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGranularMailboxRestoreArtifactFromDiscriminatorValue,
        queryParametersMapper: GranularMailboxRestoreArtifactItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GranularMailboxRestoreArtifactItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGranularMailboxRestoreArtifactFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGranularMailboxRestoreArtifact,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
