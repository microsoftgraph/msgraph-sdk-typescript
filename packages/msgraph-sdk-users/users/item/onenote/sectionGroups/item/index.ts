/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSectionGroupFromDiscriminatorValue, serializeSectionGroup, type SectionGroup } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ParentNotebookRequestBuilderRequestsMetadata, type ParentNotebookRequestBuilder } from './parentNotebook/index.js';
// @ts-ignore
import { ParentSectionGroupRequestBuilderRequestsMetadata, type ParentSectionGroupRequestBuilder } from './parentSectionGroup/index.js';
// @ts-ignore
import { SectionGroupsRequestBuilderNavigationMetadata, SectionGroupsRequestBuilderRequestsMetadata, type SectionGroupsRequestBuilder } from './sectionGroups/index.js';
// @ts-ignore
import { SectionsRequestBuilderNavigationMetadata, SectionsRequestBuilderRequestsMetadata, type SectionsRequestBuilder } from './sections/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sectionGroups property of the microsoft.graph.onenote entity.
 */
export interface SectionGroupItemRequestBuilder extends BaseRequestBuilder<SectionGroupItemRequestBuilder> {
    /**
     * Provides operations to manage the parentNotebook property of the microsoft.graph.sectionGroup entity.
     */
    get parentNotebook(): ParentNotebookRequestBuilder;
    /**
     * Provides operations to manage the parentSectionGroup property of the microsoft.graph.sectionGroup entity.
     */
    get parentSectionGroup(): ParentSectionGroupRequestBuilder;
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.sectionGroup entity.
     */
    get sectionGroups(): SectionGroupsRequestBuilder;
    /**
     * Provides operations to manage the sections property of the microsoft.graph.sectionGroup entity.
     */
    get sections(): SectionsRequestBuilder;
    /**
     * Delete navigation property sectionGroups for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SectionGroup>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SectionGroupItemRequestBuilderGetQueryParameters> | undefined) : Promise<SectionGroup | undefined>;
    /**
     * Update the navigation property sectionGroups in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SectionGroup>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: SectionGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SectionGroup | undefined>;
    /**
     * Delete navigation property sectionGroups for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SectionGroupItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property sectionGroups in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: SectionGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export interface SectionGroupItemRequestBuilderGetQueryParameters {
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
export const SectionGroupItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/onenote/sectionGroups/{sectionGroup%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SectionGroupItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SectionGroupItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SectionGroupItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    parentNotebook: {
        requestsMetadata: ParentNotebookRequestBuilderRequestsMetadata,
    },
    parentSectionGroup: {
        requestsMetadata: ParentSectionGroupRequestBuilderRequestsMetadata,
    },
    sectionGroups: {
        requestsMetadata: SectionGroupsRequestBuilderRequestsMetadata,
        navigationMetadata: SectionGroupsRequestBuilderNavigationMetadata,
    },
    sections: {
        requestsMetadata: SectionsRequestBuilderRequestsMetadata,
        navigationMetadata: SectionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SectionGroupItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SectionGroupItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SectionGroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSectionGroupFromDiscriminatorValue,
        queryParametersMapper: SectionGroupItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SectionGroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSectionGroupFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSectionGroup,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
