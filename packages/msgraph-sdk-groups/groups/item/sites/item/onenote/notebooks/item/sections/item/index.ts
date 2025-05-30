/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnenoteSectionFromDiscriminatorValue, serializeOnenoteSection, type OnenoteSection } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CopyToNotebookRequestBuilderRequestsMetadata, type CopyToNotebookRequestBuilder } from './copyToNotebook/index.js';
// @ts-ignore
import { CopyToSectionGroupRequestBuilderRequestsMetadata, type CopyToSectionGroupRequestBuilder } from './copyToSectionGroup/index.js';
// @ts-ignore
import { PagesRequestBuilderNavigationMetadata, PagesRequestBuilderRequestsMetadata, type PagesRequestBuilder } from './pages/index.js';
// @ts-ignore
import { ParentNotebookRequestBuilderRequestsMetadata, type ParentNotebookRequestBuilder } from './parentNotebook/index.js';
// @ts-ignore
import { ParentSectionGroupRequestBuilderRequestsMetadata, type ParentSectionGroupRequestBuilder } from './parentSectionGroup/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sections property of the microsoft.graph.notebook entity.
 */
export interface OnenoteSectionItemRequestBuilder extends BaseRequestBuilder<OnenoteSectionItemRequestBuilder> {
    /**
     * Provides operations to call the copyToNotebook method.
     */
    get copyToNotebook(): CopyToNotebookRequestBuilder;
    /**
     * Provides operations to call the copyToSectionGroup method.
     */
    get copyToSectionGroup(): CopyToSectionGroupRequestBuilder;
    /**
     * Provides operations to manage the pages property of the microsoft.graph.onenoteSection entity.
     */
    get pages(): PagesRequestBuilder;
    /**
     * Provides operations to manage the parentNotebook property of the microsoft.graph.onenoteSection entity.
     */
    get parentNotebook(): ParentNotebookRequestBuilder;
    /**
     * Provides operations to manage the parentSectionGroup property of the microsoft.graph.onenoteSection entity.
     */
    get parentSectionGroup(): ParentSectionGroupRequestBuilder;
    /**
     * Delete navigation property sections for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The sections in the notebook. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnenoteSection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OnenoteSectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<OnenoteSection | undefined>;
    /**
     * Update the navigation property sections in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnenoteSection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: OnenoteSection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnenoteSection | undefined>;
    /**
     * Delete navigation property sections for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The sections in the notebook. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OnenoteSectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property sections in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: OnenoteSection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The sections in the notebook. Read-only. Nullable.
 */
export interface OnenoteSectionItemRequestBuilderGetQueryParameters {
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
export const OnenoteSectionItemRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/notebooks/{notebook%2Did}/sections/{onenoteSection%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OnenoteSectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OnenoteSectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof OnenoteSectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    copyToNotebook: {
        requestsMetadata: CopyToNotebookRequestBuilderRequestsMetadata,
    },
    copyToSectionGroup: {
        requestsMetadata: CopyToSectionGroupRequestBuilderRequestsMetadata,
    },
    pages: {
        requestsMetadata: PagesRequestBuilderRequestsMetadata,
        navigationMetadata: PagesRequestBuilderNavigationMetadata,
    },
    parentNotebook: {
        requestsMetadata: ParentNotebookRequestBuilderRequestsMetadata,
    },
    parentSectionGroup: {
        requestsMetadata: ParentSectionGroupRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OnenoteSectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: OnenoteSectionItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: OnenoteSectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnenoteSectionFromDiscriminatorValue,
        queryParametersMapper: OnenoteSectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: OnenoteSectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnenoteSectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnenoteSection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
