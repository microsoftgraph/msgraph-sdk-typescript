/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createItemActivityStatFromDiscriminatorValue, type ItemActivityStat } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the allTime property of the microsoft.graph.itemAnalytics entity.
 */
export interface AllTimeRequestBuilder extends BaseRequestBuilder<AllTimeRequestBuilder> {
    /**
     * Get allTime from sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ItemActivityStat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AllTimeRequestBuilderGetQueryParameters> | undefined) : Promise<ItemActivityStat | undefined>;
    /**
     * Get allTime from sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AllTimeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get allTime from sites
 */
export interface AllTimeRequestBuilderGetQueryParameters {
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
export const AllTimeRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/analytics/allTime{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AllTimeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AllTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AllTimeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createItemActivityStatFromDiscriminatorValue,
        queryParametersMapper: AllTimeRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
