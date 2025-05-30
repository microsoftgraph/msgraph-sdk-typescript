/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createStoreFromDiscriminatorValue, serializeStore, type Store } from '@microsoft/msgraph-sdk/models/termStore/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the termStore property of the microsoft.graph.site entity.
 */
export interface TermStoreRequestBuilder extends BaseRequestBuilder<TermStoreRequestBuilder> {
    /**
     * Delete navigation property termStore for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The default termStore under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Store>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TermStoreRequestBuilderGetQueryParameters> | undefined) : Promise<Store | undefined>;
    /**
     * Update the navigation property termStore in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Store>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Store, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Store | undefined>;
    /**
     * Delete navigation property termStore for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The default termStore under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TermStoreRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property termStore in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Store, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The default termStore under this site.
 */
export interface TermStoreRequestBuilderGetQueryParameters {
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
export const TermStoreRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/getByPath(path='{path}')/termStore{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TermStoreRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TermStoreRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TermStoreRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TermStoreRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createStoreFromDiscriminatorValue,
        queryParametersMapper: TermStoreRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TermStoreRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createStoreFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeStore,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
