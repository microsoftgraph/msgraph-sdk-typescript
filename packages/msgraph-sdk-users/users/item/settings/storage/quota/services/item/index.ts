/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createServiceStorageQuotaBreakdownFromDiscriminatorValue, serializeServiceStorageQuotaBreakdown, type ServiceStorageQuotaBreakdown } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the services property of the microsoft.graph.unifiedStorageQuota entity.
 */
export interface ServiceStorageQuotaBreakdownItemRequestBuilder extends BaseRequestBuilder<ServiceStorageQuotaBreakdownItemRequestBuilder> {
    /**
     * Delete navigation property services for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get services from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServiceStorageQuotaBreakdown>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ServiceStorageQuotaBreakdownItemRequestBuilderGetQueryParameters> | undefined) : Promise<ServiceStorageQuotaBreakdown | undefined>;
    /**
     * Update the navigation property services in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServiceStorageQuotaBreakdown>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ServiceStorageQuotaBreakdown, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServiceStorageQuotaBreakdown | undefined>;
    /**
     * Delete navigation property services for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get services from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ServiceStorageQuotaBreakdownItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property services in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ServiceStorageQuotaBreakdown, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get services from users
 */
export interface ServiceStorageQuotaBreakdownItemRequestBuilderGetQueryParameters {
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
export const ServiceStorageQuotaBreakdownItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/settings/storage/quota/services/{serviceStorageQuotaBreakdown%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ServiceStorageQuotaBreakdownItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ServiceStorageQuotaBreakdownItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ServiceStorageQuotaBreakdownItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ServiceStorageQuotaBreakdownItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServiceStorageQuotaBreakdownFromDiscriminatorValue,
        queryParametersMapper: ServiceStorageQuotaBreakdownItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ServiceStorageQuotaBreakdownItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServiceStorageQuotaBreakdownFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServiceStorageQuotaBreakdown,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
