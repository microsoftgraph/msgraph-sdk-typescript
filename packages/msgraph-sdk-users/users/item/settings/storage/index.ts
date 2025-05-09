/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserStorageFromDiscriminatorValue, serializeUserStorage, type UserStorage } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { QuotaRequestBuilderNavigationMetadata, QuotaRequestBuilderRequestsMetadata, type QuotaRequestBuilder } from './quota/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the storage property of the microsoft.graph.userSettings entity.
 */
export interface StorageRequestBuilder extends BaseRequestBuilder<StorageRequestBuilder> {
    /**
     * Provides operations to manage the quota property of the microsoft.graph.userStorage entity.
     */
    get quota(): QuotaRequestBuilder;
    /**
     * Delete navigation property storage for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get storage from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserStorage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<StorageRequestBuilderGetQueryParameters> | undefined) : Promise<UserStorage | undefined>;
    /**
     * Update the navigation property storage in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserStorage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UserStorage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserStorage | undefined>;
    /**
     * Delete navigation property storage for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get storage from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<StorageRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property storage in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UserStorage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get storage from users
 */
export interface StorageRequestBuilderGetQueryParameters {
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
export const StorageRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/settings/storage{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const StorageRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const StorageRequestBuilderNavigationMetadata: Record<Exclude<keyof StorageRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    quota: {
        requestsMetadata: QuotaRequestBuilderRequestsMetadata,
        navigationMetadata: QuotaRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const StorageRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: StorageRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: StorageRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserStorageFromDiscriminatorValue,
        queryParametersMapper: StorageRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: StorageRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserStorageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserStorage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
