/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSiteFromDiscriminatorValue, type Site } from '@microsoft/msgraph-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/';
import { AnalyticsRequestBuilderRequestsMetadata, type AnalyticsRequestBuilder } from './analytics/';
import { ColumnsRequestBuilderRequestsMetadata, type ColumnsRequestBuilder } from './columns/';
import { ContentTypesRequestBuilderRequestsMetadata, type ContentTypesRequestBuilder } from './contentTypes/';
import { CreatedByUserRequestBuilderRequestsMetadata, type CreatedByUserRequestBuilder } from './createdByUser/';
import { DriveRequestBuilderRequestsMetadata, type DriveRequestBuilder } from './drive/';
import { DrivesRequestBuilderRequestsMetadata, type DrivesRequestBuilder } from './drives/';
import { ExternalColumnsRequestBuilderRequestsMetadata, type ExternalColumnsRequestBuilder } from './externalColumns/';
import { GetActivitiesByIntervalRequestBuilderRequestsMetadata, type GetActivitiesByIntervalRequestBuilder } from './getActivitiesByInterval/';
import { GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderRequestsMetadata, type GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder } from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/';
import { GetApplicableContentTypesForListWithListIdRequestBuilderRequestsMetadata, type GetApplicableContentTypesForListWithListIdRequestBuilder } from './getApplicableContentTypesForListWithListId/';
import { GetByPathWithPath1RequestBuilderNavigationMetadata, GetByPathWithPath1RequestBuilderRequestsMetadata, type GetByPathWithPath1RequestBuilder } from './getByPathWithPath1/';
import { ItemsRequestBuilderRequestsMetadata, type ItemsRequestBuilder } from './items/';
import { LastModifiedByUserRequestBuilderRequestsMetadata, type LastModifiedByUserRequestBuilder } from './lastModifiedByUser/';
import { ListsRequestBuilderRequestsMetadata, type ListsRequestBuilder } from './lists/';
import { OnenoteRequestBuilderRequestsMetadata, type OnenoteRequestBuilder } from './onenote/';
import { OperationsRequestBuilderRequestsMetadata, type OperationsRequestBuilder } from './operations/';
import { PagesRequestBuilderRequestsMetadata, type PagesRequestBuilder } from './pages/';
import { PermissionsRequestBuilderRequestsMetadata, type PermissionsRequestBuilder } from './permissions/';
import { SitesRequestBuilderRequestsMetadata, type SitesRequestBuilder } from './sites/';
import { TermStoreRequestBuilderRequestsMetadata, type TermStoreRequestBuilder } from './termStore/';
import { TermStoresRequestBuilderRequestsMetadata, type TermStoresRequestBuilder } from './termStores/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getByPath method.
 */
export interface GetByPathWithPathRequestBuilder extends BaseRequestBuilder<GetByPathWithPathRequestBuilder> {
    /**
     * Provides operations to manage the analytics property of the microsoft.graph.site entity.
     */
    get analytics(): AnalyticsRequestBuilder;
    /**
     * Provides operations to manage the columns property of the microsoft.graph.site entity.
     */
    get columns(): ColumnsRequestBuilder;
    /**
     * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
     */
    get contentTypes(): ContentTypesRequestBuilder;
    /**
     * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
     */
    get createdByUser(): CreatedByUserRequestBuilder;
    /**
     * Provides operations to manage the drive property of the microsoft.graph.site entity.
     */
    get drive(): DriveRequestBuilder;
    /**
     * Provides operations to manage the drives property of the microsoft.graph.site entity.
     */
    get drives(): DrivesRequestBuilder;
    /**
     * Provides operations to manage the externalColumns property of the microsoft.graph.site entity.
     */
    get externalColumns(): ExternalColumnsRequestBuilder;
    /**
     * Provides operations to call the getActivitiesByInterval method.
     */
    get getActivitiesByInterval(): GetActivitiesByIntervalRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.site entity.
     */
    get items(): ItemsRequestBuilder;
    /**
     * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
     */
    get lastModifiedByUser(): LastModifiedByUserRequestBuilder;
    /**
     * Provides operations to manage the lists property of the microsoft.graph.site entity.
     */
    get lists(): ListsRequestBuilder;
    /**
     * Provides operations to manage the onenote property of the microsoft.graph.site entity.
     */
    get onenote(): OnenoteRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.site entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to manage the pages property of the microsoft.graph.site entity.
     */
    get pages(): PagesRequestBuilder;
    /**
     * Provides operations to manage the permissions property of the microsoft.graph.site entity.
     */
    get permissions(): PermissionsRequestBuilder;
    /**
     * Provides operations to manage the sites property of the microsoft.graph.site entity.
     */
    get sites(): SitesRequestBuilder;
    /**
     * Provides operations to manage the termStore property of the microsoft.graph.site entity.
     */
    get termStore(): TermStoreRequestBuilder;
    /**
     * Provides operations to manage the termStores property of the microsoft.graph.site entity.
     */
    get termStores(): TermStoresRequestBuilder;
    /**
     * Invoke function getByPath
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Site>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Site | undefined>;
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @param endDateTime Usage: endDateTime='{endDateTime}'
     * @param interval Usage: interval='{interval}'
     * @param startDateTime Usage: startDateTime='{startDateTime}'
     * @returns {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder}
     */
     getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(endDateTime: string | undefined, interval: string | undefined, startDateTime: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder;
    /**
     * Provides operations to call the getApplicableContentTypesForList method.
     * @param listId Usage: listId='{listId}'
     * @returns {GetApplicableContentTypesForListWithListIdRequestBuilder}
     */
     getApplicableContentTypesForListWithListId(listId: string | undefined) : GetApplicableContentTypesForListWithListIdRequestBuilder;
    /**
     * Provides operations to call the getByPath method.
     * @param path1 Usage: path='{path1}'
     * @returns {GetByPathWithPath1RequestBuilder}
     */
     getByPathWithPath1(path1: string | undefined) : GetByPathWithPath1RequestBuilder;
    /**
     * Invoke function getByPath
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetByPathWithPathRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/getByPath(path='{path}')";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GetByPathWithPathRequestBuilderNavigationMetadata: Record<Exclude<keyof GetByPathWithPathRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval: {
        requestsMetadata: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderRequestsMetadata,
    },
    getApplicableContentTypesForListWithListId: {
        requestsMetadata: GetApplicableContentTypesForListWithListIdRequestBuilderRequestsMetadata,
    },
    getByPathWithPath1: {
        requestsMetadata: GetByPathWithPath1RequestBuilderRequestsMetadata,
        navigationMetadata: GetByPathWithPath1RequestBuilderNavigationMetadata,
    },
    analytics: {
        requestsMetadata: AnalyticsRequestBuilderRequestsMetadata,
    },
    columns: {
        requestsMetadata: ColumnsRequestBuilderRequestsMetadata,
    },
    contentTypes: {
        requestsMetadata: ContentTypesRequestBuilderRequestsMetadata,
    },
    createdByUser: {
        requestsMetadata: CreatedByUserRequestBuilderRequestsMetadata,
    },
    drive: {
        requestsMetadata: DriveRequestBuilderRequestsMetadata,
    },
    drives: {
        requestsMetadata: DrivesRequestBuilderRequestsMetadata,
    },
    externalColumns: {
        requestsMetadata: ExternalColumnsRequestBuilderRequestsMetadata,
    },
    getActivitiesByInterval: {
        requestsMetadata: GetActivitiesByIntervalRequestBuilderRequestsMetadata,
    },
    items: {
        requestsMetadata: ItemsRequestBuilderRequestsMetadata,
    },
    lastModifiedByUser: {
        requestsMetadata: LastModifiedByUserRequestBuilderRequestsMetadata,
    },
    lists: {
        requestsMetadata: ListsRequestBuilderRequestsMetadata,
    },
    onenote: {
        requestsMetadata: OnenoteRequestBuilderRequestsMetadata,
    },
    operations: {
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
    },
    pages: {
        requestsMetadata: PagesRequestBuilderRequestsMetadata,
    },
    permissions: {
        requestsMetadata: PermissionsRequestBuilderRequestsMetadata,
    },
    sites: {
        requestsMetadata: SitesRequestBuilderRequestsMetadata,
    },
    termStore: {
        requestsMetadata: TermStoreRequestBuilderRequestsMetadata,
    },
    termStores: {
        requestsMetadata: TermStoresRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetByPathWithPathRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetByPathWithPathRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
