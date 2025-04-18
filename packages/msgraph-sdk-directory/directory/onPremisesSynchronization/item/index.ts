/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnPremisesDirectorySynchronizationFromDiscriminatorValue, serializeOnPremisesDirectorySynchronization, type OnPremisesDirectorySynchronization } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onPremisesSynchronization property of the microsoft.graph.directory entity.
 */
export interface OnPremisesDirectorySynchronizationItemRequestBuilder extends BaseRequestBuilder<OnPremisesDirectorySynchronizationItemRequestBuilder> {
    /**
     * Delete navigation property onPremisesSynchronization for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an onPremisesDirectorySynchronization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnPremisesDirectorySynchronization>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesdirectorysynchronization-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<OnPremisesDirectorySynchronizationItemRequestBuilderGetQueryParameters> | undefined) : Promise<OnPremisesDirectorySynchronization | undefined>;
    /**
     * Update the properties of an onPremisesDirectorySynchronization object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnPremisesDirectorySynchronization>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesdirectorysynchronization-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: OnPremisesDirectorySynchronization, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnPremisesDirectorySynchronization | undefined>;
    /**
     * Delete navigation property onPremisesSynchronization for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an onPremisesDirectorySynchronization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OnPremisesDirectorySynchronizationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an onPremisesDirectorySynchronization object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: OnPremisesDirectorySynchronization, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an onPremisesDirectorySynchronization object.
 */
export interface OnPremisesDirectorySynchronizationItemRequestBuilderGetQueryParameters {
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
export const OnPremisesDirectorySynchronizationItemRequestBuilderUriTemplate = "{+baseurl}/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OnPremisesDirectorySynchronizationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OnPremisesDirectorySynchronizationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: OnPremisesDirectorySynchronizationItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: OnPremisesDirectorySynchronizationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnPremisesDirectorySynchronizationFromDiscriminatorValue,
        queryParametersMapper: OnPremisesDirectorySynchronizationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: OnPremisesDirectorySynchronizationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnPremisesDirectorySynchronizationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnPremisesDirectorySynchronization,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
