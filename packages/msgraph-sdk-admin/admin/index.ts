/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAdminFromDiscriminatorValue, serializeAdmin, type Admin } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { EdgeRequestBuilderNavigationMetadata, EdgeRequestBuilderRequestsMetadata, type EdgeRequestBuilder } from './edge/index.js';
// @ts-ignore
import { Microsoft365AppsRequestBuilderNavigationMetadata, Microsoft365AppsRequestBuilderRequestsMetadata, type Microsoft365AppsRequestBuilder } from './microsoft365Apps/index.js';
// @ts-ignore
import { PeopleRequestBuilderNavigationMetadata, PeopleRequestBuilderRequestsMetadata, type PeopleRequestBuilder } from './people/index.js';
// @ts-ignore
import { ReportSettingsRequestBuilderRequestsMetadata, type ReportSettingsRequestBuilder } from './reportSettings/index.js';
// @ts-ignore
import { ServiceAnnouncementRequestBuilderNavigationMetadata, ServiceAnnouncementRequestBuilderRequestsMetadata, type ServiceAnnouncementRequestBuilder } from './serviceAnnouncement/index.js';
// @ts-ignore
import { SharepointRequestBuilderNavigationMetadata, SharepointRequestBuilderRequestsMetadata, type SharepointRequestBuilder } from './sharepoint/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the admin singleton.
 */
export interface AdminRequestBuilder extends BaseRequestBuilder<AdminRequestBuilder> {
    /**
     * Provides operations to manage the edge property of the microsoft.graph.admin entity.
     */
    get edge(): EdgeRequestBuilder;
    /**
     * Provides operations to manage the microsoft365Apps property of the microsoft.graph.admin entity.
     */
    get microsoft365Apps(): Microsoft365AppsRequestBuilder;
    /**
     * Provides operations to manage the people property of the microsoft.graph.admin entity.
     */
    get people(): PeopleRequestBuilder;
    /**
     * Provides operations to manage the reportSettings property of the microsoft.graph.admin entity.
     */
    get reportSettings(): ReportSettingsRequestBuilder;
    /**
     * Provides operations to manage the serviceAnnouncement property of the microsoft.graph.admin entity.
     */
    get serviceAnnouncement(): ServiceAnnouncementRequestBuilder;
    /**
     * Provides operations to manage the sharepoint property of the microsoft.graph.admin entity.
     */
    get sharepoint(): SharepointRequestBuilder;
    /**
     * Get admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Admin>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AdminRequestBuilderGetQueryParameters> | undefined) : Promise<Admin | undefined>;
    /**
     * Update admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Admin>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Admin, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Admin | undefined>;
    /**
     * Get admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AdminRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Admin, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get admin
 */
export interface AdminRequestBuilderGetQueryParameters {
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
export const AdminRequestBuilderUriTemplate = "{+baseurl}/admin{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AdminRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AdminRequestBuilderNavigationMetadata: Record<Exclude<keyof AdminRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    edge: {
        requestsMetadata: EdgeRequestBuilderRequestsMetadata,
        navigationMetadata: EdgeRequestBuilderNavigationMetadata,
    },
    microsoft365Apps: {
        requestsMetadata: Microsoft365AppsRequestBuilderRequestsMetadata,
        navigationMetadata: Microsoft365AppsRequestBuilderNavigationMetadata,
    },
    people: {
        requestsMetadata: PeopleRequestBuilderRequestsMetadata,
        navigationMetadata: PeopleRequestBuilderNavigationMetadata,
    },
    reportSettings: {
        requestsMetadata: ReportSettingsRequestBuilderRequestsMetadata,
    },
    serviceAnnouncement: {
        requestsMetadata: ServiceAnnouncementRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceAnnouncementRequestBuilderNavigationMetadata,
    },
    sharepoint: {
        requestsMetadata: SharepointRequestBuilderRequestsMetadata,
        navigationMetadata: SharepointRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AdminRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AdminRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAdminFromDiscriminatorValue,
        queryParametersMapper: AdminRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AdminRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAdminFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAdmin,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
