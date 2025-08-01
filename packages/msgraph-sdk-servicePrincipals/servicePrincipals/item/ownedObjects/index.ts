/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue, type DirectoryObjectCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { GraphApplicationRequestBuilderNavigationMetadata, GraphApplicationRequestBuilderRequestsMetadata, type GraphApplicationRequestBuilder } from './graphApplication/index.js';
// @ts-ignore
import { GraphAppRoleAssignmentRequestBuilderNavigationMetadata, GraphAppRoleAssignmentRequestBuilderRequestsMetadata, type GraphAppRoleAssignmentRequestBuilder } from './graphAppRoleAssignment/index.js';
// @ts-ignore
import { GraphEndpointRequestBuilderNavigationMetadata, GraphEndpointRequestBuilderRequestsMetadata, type GraphEndpointRequestBuilder } from './graphEndpoint/index.js';
// @ts-ignore
import { GraphGroupRequestBuilderNavigationMetadata, GraphGroupRequestBuilderRequestsMetadata, type GraphGroupRequestBuilder } from './graphGroup/index.js';
// @ts-ignore
import { GraphServicePrincipalRequestBuilderNavigationMetadata, GraphServicePrincipalRequestBuilderRequestsMetadata, type GraphServicePrincipalRequestBuilder } from './graphServicePrincipal/index.js';
// @ts-ignore
import { DirectoryObjectItemRequestBuilderNavigationMetadata, DirectoryObjectItemRequestBuilderRequestsMetadata, type DirectoryObjectItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity.
 */
export interface OwnedObjectsRequestBuilder extends BaseRequestBuilder<OwnedObjectsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Casts the previous resource to application.
     */
    get graphApplication(): GraphApplicationRequestBuilder;
    /**
     * Casts the previous resource to appRoleAssignment.
     */
    get graphAppRoleAssignment(): GraphAppRoleAssignmentRequestBuilder;
    /**
     * Casts the previous resource to endpoint.
     */
    get graphEndpoint(): GraphEndpointRequestBuilder;
    /**
     * Casts the previous resource to group.
     */
    get graphGroup(): GraphGroupRequestBuilder;
    /**
     * Casts the previous resource to servicePrincipal.
     */
    get graphServicePrincipal(): GraphServicePrincipalRequestBuilder;
    /**
     * Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity.
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns {DirectoryObjectItemRequestBuilder}
     */
     byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder;
    /**
     * Retrieve a list of objects owned by the servicePrincipal.  This could include applications or groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObjectCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-list-ownedobjects?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<OwnedObjectsRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryObjectCollectionResponse | undefined>;
    /**
     * Retrieve a list of objects owned by the servicePrincipal.  This could include applications or groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OwnedObjectsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of objects owned by the servicePrincipal.  This could include applications or groups.
 */
export interface OwnedObjectsRequestBuilderGetQueryParameters {
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
export const OwnedObjectsRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/ownedObjects{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OwnedObjectsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OwnedObjectsRequestBuilderNavigationMetadata: Record<Exclude<keyof OwnedObjectsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDirectoryObjectId: {
        requestsMetadata: DirectoryObjectItemRequestBuilderRequestsMetadata,
        navigationMetadata: DirectoryObjectItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["directoryObject%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    graphApplication: {
        requestsMetadata: GraphApplicationRequestBuilderRequestsMetadata,
        navigationMetadata: GraphApplicationRequestBuilderNavigationMetadata,
    },
    graphAppRoleAssignment: {
        requestsMetadata: GraphAppRoleAssignmentRequestBuilderRequestsMetadata,
        navigationMetadata: GraphAppRoleAssignmentRequestBuilderNavigationMetadata,
    },
    graphEndpoint: {
        requestsMetadata: GraphEndpointRequestBuilderRequestsMetadata,
        navigationMetadata: GraphEndpointRequestBuilderNavigationMetadata,
    },
    graphGroup: {
        requestsMetadata: GraphGroupRequestBuilderRequestsMetadata,
        navigationMetadata: GraphGroupRequestBuilderNavigationMetadata,
    },
    graphServicePrincipal: {
        requestsMetadata: GraphServicePrincipalRequestBuilderRequestsMetadata,
        navigationMetadata: GraphServicePrincipalRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OwnedObjectsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OwnedObjectsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OwnedObjectsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
