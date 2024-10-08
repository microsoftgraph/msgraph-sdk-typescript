/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue, createResourceSpecificPermissionGrantFromDiscriminatorValue, serializeResourceSpecificPermissionGrant, type ResourceSpecificPermissionGrant, type ResourceSpecificPermissionGrantCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DeltaRequestBuilderRequestsMetadata, type DeltaRequestBuilder } from './delta/index.js';
// @ts-ignore
import { GetAvailableExtensionPropertiesRequestBuilderRequestsMetadata, type GetAvailableExtensionPropertiesRequestBuilder } from './getAvailableExtensionProperties/index.js';
// @ts-ignore
import { GetByIdsRequestBuilderRequestsMetadata, type GetByIdsRequestBuilder } from './getByIds/index.js';
// @ts-ignore
import { ResourceSpecificPermissionGrantItemRequestBuilderNavigationMetadata, ResourceSpecificPermissionGrantItemRequestBuilderRequestsMetadata, type ResourceSpecificPermissionGrantItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type ValidatePropertiesRequestBuilder, ValidatePropertiesRequestBuilderRequestsMetadata } from './validateProperties/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of resourceSpecificPermissionGrant entities.
 */
export interface PermissionGrantsRequestBuilder extends BaseRequestBuilder<PermissionGrantsRequestBuilder> {
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder;
    /**
     * Provides operations to call the getByIds method.
     */
    get getByIds(): GetByIdsRequestBuilder;
    /**
     * Provides operations to call the validateProperties method.
     */
    get validateProperties(): ValidatePropertiesRequestBuilder;
    /**
     * Provides operations to manage the collection of resourceSpecificPermissionGrant entities.
     * @param resourceSpecificPermissionGrantId The unique identifier of resourceSpecificPermissionGrant
     * @returns {ResourceSpecificPermissionGrantItemRequestBuilder}
     */
     byResourceSpecificPermissionGrantId(resourceSpecificPermissionGrantId: string) : ResourceSpecificPermissionGrantItemRequestBuilder;
    /**
     * Get entities from permissionGrants
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ResourceSpecificPermissionGrantCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PermissionGrantsRequestBuilderGetQueryParameters> | undefined) : Promise<ResourceSpecificPermissionGrantCollectionResponse | undefined>;
    /**
     * Add new entity to permissionGrants
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ResourceSpecificPermissionGrant>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ResourceSpecificPermissionGrant, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ResourceSpecificPermissionGrant | undefined>;
    /**
     * Get entities from permissionGrants
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PermissionGrantsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add new entity to permissionGrants
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ResourceSpecificPermissionGrant, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entities from permissionGrants
 */
export interface PermissionGrantsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const PermissionGrantsRequestBuilderUriTemplate = "{+baseurl}/permissionGrants{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PermissionGrantsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PermissionGrantsRequestBuilderNavigationMetadata: Record<Exclude<keyof PermissionGrantsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byResourceSpecificPermissionGrantId: {
        requestsMetadata: ResourceSpecificPermissionGrantItemRequestBuilderRequestsMetadata,
        navigationMetadata: ResourceSpecificPermissionGrantItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["resourceSpecificPermissionGrant%2Did"],
    },
    delta: {
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
    getAvailableExtensionProperties: {
        requestsMetadata: GetAvailableExtensionPropertiesRequestBuilderRequestsMetadata,
    },
    getByIds: {
        requestsMetadata: GetByIdsRequestBuilderRequestsMetadata,
    },
    validateProperties: {
        requestsMetadata: ValidatePropertiesRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PermissionGrantsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PermissionGrantsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PermissionGrantsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: PermissionGrantsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createResourceSpecificPermissionGrantFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeResourceSpecificPermissionGrant,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
