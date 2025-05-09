/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessReviewSetFromDiscriminatorValue, serializeAccessReviewSet, type AccessReviewSet } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DefinitionsRequestBuilderNavigationMetadata, DefinitionsRequestBuilderRequestsMetadata, type DefinitionsRequestBuilder } from './definitions/index.js';
// @ts-ignore
import { HistoryDefinitionsRequestBuilderNavigationMetadata, HistoryDefinitionsRequestBuilderRequestsMetadata, type HistoryDefinitionsRequestBuilder } from './historyDefinitions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessReviews property of the microsoft.graph.identityGovernance entity.
 */
export interface AccessReviewsRequestBuilder extends BaseRequestBuilder<AccessReviewsRequestBuilder> {
    /**
     * Provides operations to manage the definitions property of the microsoft.graph.accessReviewSet entity.
     */
    get definitions(): DefinitionsRequestBuilder;
    /**
     * Provides operations to manage the historyDefinitions property of the microsoft.graph.accessReviewSet entity.
     */
    get historyDefinitions(): HistoryDefinitionsRequestBuilder;
    /**
     * Delete navigation property accessReviews for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get accessReviews from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AccessReviewsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewSet | undefined>;
    /**
     * Update the navigation property accessReviews in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AccessReviewSet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewSet | undefined>;
    /**
     * Delete navigation property accessReviews for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get accessReviews from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessReviewsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property accessReviews in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessReviewSet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get accessReviews from identityGovernance
 */
export interface AccessReviewsRequestBuilderGetQueryParameters {
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
export const AccessReviewsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/accessReviews{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessReviewsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessReviewsRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessReviewsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    definitions: {
        requestsMetadata: DefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: DefinitionsRequestBuilderNavigationMetadata,
    },
    historyDefinitions: {
        requestsMetadata: HistoryDefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: HistoryDefinitionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessReviewsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessReviewsRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessReviewsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewSetFromDiscriminatorValue,
        queryParametersMapper: AccessReviewsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessReviewsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewSetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewSet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
