/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveItemFromDiscriminatorValue, type DriveItem } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ContentRequestBuilderRequestsMetadata, type ContentRequestBuilder } from './content/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the root property of the microsoft.graph.sharedDriveItem entity.
 */
export interface RootRequestBuilder extends BaseRequestBuilder<RootRequestBuilder> {
    /**
     * Provides operations to manage the media for the sharedDriveItem entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RootRequestBuilderGetQueryParameters> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RootRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Used to access the underlying driveItem. Deprecated -- use driveItem instead.
 */
export interface RootRequestBuilderGetQueryParameters {
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
export const RootRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/root{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RootRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const RootRequestBuilderNavigationMetadata: Record<Exclude<keyof RootRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    content: {
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RootRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RootRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        queryParametersMapper: RootRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
