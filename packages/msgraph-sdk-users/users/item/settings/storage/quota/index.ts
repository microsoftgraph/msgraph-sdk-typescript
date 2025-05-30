/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedStorageQuotaFromDiscriminatorValue, serializeUnifiedStorageQuota, type UnifiedStorageQuota } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ServicesRequestBuilderNavigationMetadata, ServicesRequestBuilderRequestsMetadata, type ServicesRequestBuilder } from './services/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the quota property of the microsoft.graph.userStorage entity.
 */
export interface QuotaRequestBuilder extends BaseRequestBuilder<QuotaRequestBuilder> {
    /**
     * Provides operations to manage the services property of the microsoft.graph.unifiedStorageQuota entity.
     */
    get services(): ServicesRequestBuilder;
    /**
     * Delete navigation property quota for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get quota from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedStorageQuota>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<QuotaRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedStorageQuota | undefined>;
    /**
     * Update the navigation property quota in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedStorageQuota>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UnifiedStorageQuota, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedStorageQuota | undefined>;
    /**
     * Delete navigation property quota for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get quota from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<QuotaRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property quota in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UnifiedStorageQuota, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get quota from users
 */
export interface QuotaRequestBuilderGetQueryParameters {
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
export const QuotaRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/settings/storage/quota{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const QuotaRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const QuotaRequestBuilderNavigationMetadata: Record<Exclude<keyof QuotaRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    services: {
        requestsMetadata: ServicesRequestBuilderRequestsMetadata,
        navigationMetadata: ServicesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const QuotaRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: QuotaRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: QuotaRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedStorageQuotaFromDiscriminatorValue,
        queryParametersMapper: QuotaRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: QuotaRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedStorageQuotaFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedStorageQuota,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
