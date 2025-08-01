/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageResourceFromDiscriminatorValue, serializeAccessPackageResource, type AccessPackageResource } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { EnvironmentRequestBuilderRequestsMetadata, type EnvironmentRequestBuilder } from './environment/index.js';
// @ts-ignore
import { RefreshRequestBuilderRequestsMetadata, type RefreshRequestBuilder } from './refresh/index.js';
// @ts-ignore
import { ScopesRequestBuilderNavigationMetadata, ScopesRequestBuilderRequestsMetadata, type ScopesRequestBuilder } from './scopes/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resource property of the microsoft.graph.accessPackageResourceRole entity.
 */
export interface ResourceRequestBuilder extends BaseRequestBuilder<ResourceRequestBuilder> {
    /**
     * Provides operations to manage the environment property of the microsoft.graph.accessPackageResource entity.
     */
    get environment(): EnvironmentRequestBuilder;
    /**
     * Provides operations to call the refresh method.
     */
    get refresh(): RefreshRequestBuilder;
    /**
     * Provides operations to manage the scopes property of the microsoft.graph.accessPackageResource entity.
     */
    get scopes(): ScopesRequestBuilder;
    /**
     * Delete navigation property resource for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get resource from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageResource>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ResourceRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageResource | undefined>;
    /**
     * Update the navigation property resource in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageResource>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AccessPackageResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageResource | undefined>;
    /**
     * Delete navigation property resource for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get resource from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ResourceRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property resource in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessPackageResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get resource from identityGovernance
 */
export interface ResourceRequestBuilderGetQueryParameters {
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
export const ResourceRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/resourceScopes/{accessPackageResourceScope%2Did}/resource/roles/{accessPackageResourceRole%2Did}/resource{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ResourceRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ResourceRequestBuilderNavigationMetadata: Record<Exclude<keyof ResourceRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    environment: {
        requestsMetadata: EnvironmentRequestBuilderRequestsMetadata,
    },
    refresh: {
        requestsMetadata: RefreshRequestBuilderRequestsMetadata,
    },
    scopes: {
        requestsMetadata: ScopesRequestBuilderRequestsMetadata,
        navigationMetadata: ScopesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ResourceRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ResourceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ResourceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageResourceFromDiscriminatorValue,
        queryParametersMapper: ResourceRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ResourceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
