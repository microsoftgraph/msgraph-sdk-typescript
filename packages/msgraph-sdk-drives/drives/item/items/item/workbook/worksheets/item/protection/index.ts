/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookWorksheetProtectionFromDiscriminatorValue, serializeWorkbookWorksheetProtection, type WorkbookWorksheetProtection } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ProtectRequestBuilderRequestsMetadata, type ProtectRequestBuilder } from './protect/index.js';
// @ts-ignore
import { type UnprotectRequestBuilder, UnprotectRequestBuilderRequestsMetadata } from './unprotect/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the protection property of the microsoft.graph.workbookWorksheet entity.
 */
export interface ProtectionRequestBuilder extends BaseRequestBuilder<ProtectionRequestBuilder> {
    /**
     * Provides operations to call the protect method.
     */
    get protect(): ProtectRequestBuilder;
    /**
     * Provides operations to call the unprotect method.
     */
    get unprotect(): UnprotectRequestBuilder;
    /**
     * Delete navigation property protection for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The sheet protection object for a worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookWorksheetProtection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ProtectionRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookWorksheetProtection | undefined>;
    /**
     * Update the navigation property protection in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookWorksheetProtection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookWorksheetProtection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookWorksheetProtection | undefined>;
    /**
     * Delete navigation property protection for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The sheet protection object for a worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProtectionRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property protection in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookWorksheetProtection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The sheet protection object for a worksheet. Read-only.
 */
export interface ProtectionRequestBuilderGetQueryParameters {
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
export const ProtectionRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/protection{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ProtectionRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ProtectionRequestBuilderNavigationMetadata: Record<Exclude<keyof ProtectionRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    protect: {
        requestsMetadata: ProtectRequestBuilderRequestsMetadata,
    },
    unprotect: {
        requestsMetadata: UnprotectRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProtectionRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ProtectionRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ProtectionRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookWorksheetProtectionFromDiscriminatorValue,
        queryParametersMapper: ProtectionRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ProtectionRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookWorksheetProtectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookWorksheetProtection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
