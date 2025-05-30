/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPermissionGrantPolicyFromDiscriminatorValue, serializePermissionGrantPolicy, type PermissionGrantPolicy } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ExcludesRequestBuilderNavigationMetadata, ExcludesRequestBuilderRequestsMetadata, type ExcludesRequestBuilder } from './excludes/index.js';
// @ts-ignore
import { IncludesRequestBuilderNavigationMetadata, IncludesRequestBuilderRequestsMetadata, type IncludesRequestBuilder } from './includes/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface PermissionGrantPolicyItemRequestBuilder extends BaseRequestBuilder<PermissionGrantPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity.
     */
    get excludes(): ExcludesRequestBuilder;
    /**
     * Provides operations to manage the includes property of the microsoft.graph.permissionGrantPolicy entity.
     */
    get includes(): IncludesRequestBuilder;
    /**
     * Delete a permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve a single permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PermissionGrantPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PermissionGrantPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<PermissionGrantPolicy | undefined>;
    /**
     * Update properties of a  permissionGrantPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PermissionGrantPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: PermissionGrantPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PermissionGrantPolicy | undefined>;
    /**
     * Delete a permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve a single permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PermissionGrantPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update properties of a  permissionGrantPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PermissionGrantPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a single permissionGrantPolicy object.
 */
export interface PermissionGrantPolicyItemRequestBuilderGetQueryParameters {
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
export const PermissionGrantPolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PermissionGrantPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PermissionGrantPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PermissionGrantPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    excludes: {
        requestsMetadata: ExcludesRequestBuilderRequestsMetadata,
        navigationMetadata: ExcludesRequestBuilderNavigationMetadata,
    },
    includes: {
        requestsMetadata: IncludesRequestBuilderRequestsMetadata,
        navigationMetadata: IncludesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PermissionGrantPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PermissionGrantPolicyItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: PermissionGrantPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPermissionGrantPolicyFromDiscriminatorValue,
        queryParametersMapper: PermissionGrantPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PermissionGrantPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPermissionGrantPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePermissionGrantPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
