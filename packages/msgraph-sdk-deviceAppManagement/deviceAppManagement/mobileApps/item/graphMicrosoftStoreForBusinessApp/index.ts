/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMicrosoftStoreForBusinessAppFromDiscriminatorValue, type MicrosoftStoreForBusinessApp } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, type AssignmentsRequestBuilder } from './assignments/index.js';
// @ts-ignore
import { CategoriesRequestBuilderNavigationMetadata, CategoriesRequestBuilderRequestsMetadata, type CategoriesRequestBuilder } from './categories/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to microsoftStoreForBusinessApp.
 */
export interface GraphMicrosoftStoreForBusinessAppRequestBuilder extends BaseRequestBuilder<GraphMicrosoftStoreForBusinessAppRequestBuilder> {
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the categories property of the microsoft.graph.mobileApp entity.
     */
    get categories(): CategoriesRequestBuilder;
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.microsoftStoreForBusinessApp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MicrosoftStoreForBusinessApp>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GraphMicrosoftStoreForBusinessAppRequestBuilderGetQueryParameters> | undefined) : Promise<MicrosoftStoreForBusinessApp | undefined>;
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.microsoftStoreForBusinessApp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphMicrosoftStoreForBusinessAppRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the item of type microsoft.graph.mobileApp as microsoft.graph.microsoftStoreForBusinessApp
 */
export interface GraphMicrosoftStoreForBusinessAppRequestBuilderGetQueryParameters {
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
export const GraphMicrosoftStoreForBusinessAppRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.microsoftStoreForBusinessApp{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GraphMicrosoftStoreForBusinessAppRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GraphMicrosoftStoreForBusinessAppRequestBuilderNavigationMetadata: Record<Exclude<keyof GraphMicrosoftStoreForBusinessAppRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assignments: {
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    categories: {
        requestsMetadata: CategoriesRequestBuilderRequestsMetadata,
        navigationMetadata: CategoriesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphMicrosoftStoreForBusinessAppRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GraphMicrosoftStoreForBusinessAppRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMicrosoftStoreForBusinessAppFromDiscriminatorValue,
        queryParametersMapper: GraphMicrosoftStoreForBusinessAppRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
