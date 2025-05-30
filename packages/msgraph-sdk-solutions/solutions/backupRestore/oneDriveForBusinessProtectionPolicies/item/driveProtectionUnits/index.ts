/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveProtectionUnitCollectionResponseFromDiscriminatorValue, type DriveProtectionUnitCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DriveProtectionUnitItemRequestBuilderRequestsMetadata, type DriveProtectionUnitItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the driveProtectionUnits property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
 */
export interface DriveProtectionUnitsRequestBuilder extends BaseRequestBuilder<DriveProtectionUnitsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the driveProtectionUnits property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
     * @param driveProtectionUnitId The unique identifier of driveProtectionUnit
     * @returns {DriveProtectionUnitItemRequestBuilder}
     */
     byDriveProtectionUnitId(driveProtectionUnitId: string) : DriveProtectionUnitItemRequestBuilder;
    /**
     * Get a list of the driveProtectionUnit objects that are associated with a oneDriveForBusinessProtectionPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveProtectionUnitCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/backuprestoreroot-list-driveprotectionunits?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DriveProtectionUnitsRequestBuilderGetQueryParameters> | undefined) : Promise<DriveProtectionUnitCollectionResponse | undefined>;
    /**
     * Get a list of the driveProtectionUnit objects that are associated with a oneDriveForBusinessProtectionPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DriveProtectionUnitsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of the driveProtectionUnit objects that are associated with a oneDriveForBusinessProtectionPolicy.
 */
export interface DriveProtectionUnitsRequestBuilderGetQueryParameters {
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
export const DriveProtectionUnitsRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy%2Did}/driveProtectionUnits{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DriveProtectionUnitsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DriveProtectionUnitsRequestBuilderNavigationMetadata: Record<Exclude<keyof DriveProtectionUnitsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDriveProtectionUnitId: {
        requestsMetadata: DriveProtectionUnitItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["driveProtectionUnit%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DriveProtectionUnitsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DriveProtectionUnitsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveProtectionUnitCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DriveProtectionUnitsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
