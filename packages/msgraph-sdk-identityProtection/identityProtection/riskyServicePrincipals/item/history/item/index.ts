/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createRiskyServicePrincipalHistoryItemFromDiscriminatorValue, serializeRiskyServicePrincipalHistoryItem, type RiskyServicePrincipalHistoryItem } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the history property of the microsoft.graph.riskyServicePrincipal entity.
 */
export interface RiskyServicePrincipalHistoryItemItemRequestBuilder extends BaseRequestBuilder<RiskyServicePrincipalHistoryItemItemRequestBuilder> {
    /**
     * Delete navigation property history for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents the risk history of Microsoft Entra service principals.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RiskyServicePrincipalHistoryItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RiskyServicePrincipalHistoryItemItemRequestBuilderGetQueryParameters> | undefined) : Promise<RiskyServicePrincipalHistoryItem | undefined>;
    /**
     * Update the navigation property history in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RiskyServicePrincipalHistoryItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: RiskyServicePrincipalHistoryItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<RiskyServicePrincipalHistoryItem | undefined>;
    /**
     * Delete navigation property history for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents the risk history of Microsoft Entra service principals.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RiskyServicePrincipalHistoryItemItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property history in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: RiskyServicePrincipalHistoryItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the risk history of Microsoft Entra service principals.
 */
export interface RiskyServicePrincipalHistoryItemItemRequestBuilderGetQueryParameters {
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
export const RiskyServicePrincipalHistoryItemItemRequestBuilderUriTemplate = "{+baseurl}/identityProtection/riskyServicePrincipals/{riskyServicePrincipal%2Did}/history/{riskyServicePrincipalHistoryItem%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RiskyServicePrincipalHistoryItemItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RiskyServicePrincipalHistoryItemItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: RiskyServicePrincipalHistoryItemItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: RiskyServicePrincipalHistoryItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRiskyServicePrincipalHistoryItemFromDiscriminatorValue,
        queryParametersMapper: RiskyServicePrincipalHistoryItemItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: RiskyServicePrincipalHistoryItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRiskyServicePrincipalHistoryItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRiskyServicePrincipalHistoryItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
