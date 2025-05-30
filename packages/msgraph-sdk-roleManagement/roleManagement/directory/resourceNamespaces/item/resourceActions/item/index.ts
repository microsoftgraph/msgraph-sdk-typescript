/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRbacResourceActionFromDiscriminatorValue, serializeUnifiedRbacResourceAction, type UnifiedRbacResourceAction } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceActions property of the microsoft.graph.unifiedRbacResourceNamespace entity.
 */
export interface UnifiedRbacResourceActionItemRequestBuilder extends BaseRequestBuilder<UnifiedRbacResourceActionItemRequestBuilder> {
    /**
     * Delete navigation property resourceActions for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get resourceActions from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRbacResourceAction>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRbacResourceActionItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRbacResourceAction | undefined>;
    /**
     * Update the navigation property resourceActions in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRbacResourceAction>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UnifiedRbacResourceAction, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRbacResourceAction | undefined>;
    /**
     * Delete navigation property resourceActions for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get resourceActions from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRbacResourceActionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property resourceActions in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UnifiedRbacResourceAction, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get resourceActions from roleManagement
 */
export interface UnifiedRbacResourceActionItemRequestBuilderGetQueryParameters {
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
export const UnifiedRbacResourceActionItemRequestBuilderUriTemplate = "{+baseurl}/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace%2Did}/resourceActions/{unifiedRbacResourceAction%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UnifiedRbacResourceActionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRbacResourceActionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UnifiedRbacResourceActionItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UnifiedRbacResourceActionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRbacResourceActionFromDiscriminatorValue,
        queryParametersMapper: UnifiedRbacResourceActionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UnifiedRbacResourceActionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRbacResourceActionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRbacResourceAction,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
