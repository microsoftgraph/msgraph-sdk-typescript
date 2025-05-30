/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createRoleDefinitionCollectionResponseFromDiscriminatorValue, createRoleDefinitionFromDiscriminatorValue, serializeRoleDefinition, type RoleDefinition, type RoleDefinitionCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { RoleDefinitionItemRequestBuilderNavigationMetadata, RoleDefinitionItemRequestBuilderRequestsMetadata, type RoleDefinitionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleDefinitions property of the microsoft.graph.deviceManagement entity.
 */
export interface RoleDefinitionsRequestBuilder extends BaseRequestBuilder<RoleDefinitionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the roleDefinitions property of the microsoft.graph.deviceManagement entity.
     * @param roleDefinitionId The unique identifier of roleDefinition
     * @returns {RoleDefinitionItemRequestBuilder}
     */
     byRoleDefinitionId(roleDefinitionId: string) : RoleDefinitionItemRequestBuilder;
    /**
     * List properties and relationships of the roleDefinition objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RoleDefinitionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-roledefinition-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RoleDefinitionsRequestBuilderGetQueryParameters> | undefined) : Promise<RoleDefinitionCollectionResponse | undefined>;
    /**
     * Create a new deviceAndAppManagementRoleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RoleDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroledefinition-create?view=graph-rest-1.0|Find more info here}
     */
     post(body: RoleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<RoleDefinition | undefined>;
    /**
     * List properties and relationships of the roleDefinition objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleDefinitionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new deviceAndAppManagementRoleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RoleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List properties and relationships of the roleDefinition objects.
 */
export interface RoleDefinitionsRequestBuilderGetQueryParameters {
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
export const RoleDefinitionsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/roleDefinitions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RoleDefinitionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RoleDefinitionsRequestBuilderNavigationMetadata: Record<Exclude<keyof RoleDefinitionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byRoleDefinitionId: {
        requestsMetadata: RoleDefinitionItemRequestBuilderRequestsMetadata,
        navigationMetadata: RoleDefinitionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["roleDefinition%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RoleDefinitionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RoleDefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRoleDefinitionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RoleDefinitionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: RoleDefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRoleDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRoleDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
