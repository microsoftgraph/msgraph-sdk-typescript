/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createServiceAppFromDiscriminatorValue, serializeServiceApp, type ServiceApp } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ActivateRequestBuilderRequestsMetadata, type ActivateRequestBuilder } from './activate/index.js';
// @ts-ignore
import { DeactivateRequestBuilderRequestsMetadata, type DeactivateRequestBuilder } from './deactivate/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the serviceApps property of the microsoft.graph.backupRestoreRoot entity.
 */
export interface ServiceAppItemRequestBuilder extends BaseRequestBuilder<ServiceAppItemRequestBuilder> {
    /**
     * Provides operations to call the activate method.
     */
    get activate(): ActivateRequestBuilder;
    /**
     * Provides operations to call the deactivate method.
     */
    get deactivate(): DeactivateRequestBuilder;
    /**
     * Delete a serviceApp.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/backuprestoreroot-delete-serviceapps?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a serviceApp object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServiceApp>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/serviceapp-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ServiceAppItemRequestBuilderGetQueryParameters> | undefined) : Promise<ServiceApp | undefined>;
    /**
     * Update the navigation property serviceApps in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServiceApp>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ServiceApp, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServiceApp | undefined>;
    /**
     * Delete a serviceApp.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a serviceApp object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ServiceAppItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property serviceApps in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ServiceApp, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a serviceApp object.
 */
export interface ServiceAppItemRequestBuilderGetQueryParameters {
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
export const ServiceAppItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/serviceApps/{serviceApp%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ServiceAppItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ServiceAppItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ServiceAppItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    activate: {
        requestsMetadata: ActivateRequestBuilderRequestsMetadata,
    },
    deactivate: {
        requestsMetadata: DeactivateRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ServiceAppItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ServiceAppItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ServiceAppItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServiceAppFromDiscriminatorValue,
        queryParametersMapper: ServiceAppItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ServiceAppItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServiceAppFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServiceApp,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
