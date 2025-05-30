/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createExternalConnectionFromDiscriminatorValue, serializeExternalConnection, type ExternalConnection } from '@microsoft/msgraph-sdk/models/externalConnectors/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GroupsRequestBuilderNavigationMetadata, GroupsRequestBuilderRequestsMetadata, type GroupsRequestBuilder } from './groups/index.js';
// @ts-ignore
import { ItemsRequestBuilderNavigationMetadata, ItemsRequestBuilderRequestsMetadata, type ItemsRequestBuilder } from './items/index.js';
// @ts-ignore
import { OperationsRequestBuilderNavigationMetadata, OperationsRequestBuilderRequestsMetadata, type OperationsRequestBuilder } from './operations/index.js';
// @ts-ignore
import { SchemaRequestBuilderRequestsMetadata, type SchemaRequestBuilder } from './schema/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of externalConnection entities.
 */
export interface ExternalConnectionItemRequestBuilder extends BaseRequestBuilder<ExternalConnectionItemRequestBuilder> {
    /**
     * Provides operations to manage the groups property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    get groups(): GroupsRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    get items(): ItemsRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to manage the schema property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    get schema(): SchemaRequestBuilder;
    /**
     * Delete entity from connections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from connections by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExternalConnection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ExternalConnectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<ExternalConnection | undefined>;
    /**
     * Update entity in connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExternalConnection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ExternalConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ExternalConnection | undefined>;
    /**
     * Delete entity from connections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from connections by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExternalConnectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ExternalConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from connections by key
 */
export interface ExternalConnectionItemRequestBuilderGetQueryParameters {
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
export const ExternalConnectionItemRequestBuilderUriTemplate = "{+baseurl}/connections/{externalConnection%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ExternalConnectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ExternalConnectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ExternalConnectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    groups: {
        requestsMetadata: GroupsRequestBuilderRequestsMetadata,
        navigationMetadata: GroupsRequestBuilderNavigationMetadata,
    },
    items: {
        requestsMetadata: ItemsRequestBuilderRequestsMetadata,
        navigationMetadata: ItemsRequestBuilderNavigationMetadata,
    },
    operations: {
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
        navigationMetadata: OperationsRequestBuilderNavigationMetadata,
    },
    schema: {
        requestsMetadata: SchemaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ExternalConnectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ExternalConnectionItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ExternalConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExternalConnectionFromDiscriminatorValue,
        queryParametersMapper: ExternalConnectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ExternalConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExternalConnectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExternalConnection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
