import {Site} from '../../../../models/';
import {createSiteFromDiscriminatorValue} from '../../../../models/createSiteFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AnalyticsRequestBuilder} from './analytics/analyticsRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as Icada710d4aef7b6c8f82248ec735428e6f92768cd1ab43adeb90e6f5fd47fde2} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {ContentTypeItemRequestBuilder} from './contentTypes/item/contentTypeItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {ExternalColumnsRequestBuilder} from './externalColumns/externalColumnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as Ic16ad1c309947404cf477a119b524103aa2aae0a2aacef74a4a4efed10eed7f9} from './externalColumns/item/columnDefinitionItemRequestBuilder';
import {BaseItemItemRequestBuilder} from './items/item/baseItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListItemRequestBuilder} from './lists/item/listItemRequestBuilder';
import {ListsRequestBuilder} from './lists/listsRequestBuilder';
import {GetActivitiesByIntervalRequestBuilder} from './microsoftGraphGetActivitiesByInterval/getActivitiesByIntervalRequestBuilder';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder} from './microsoftGraphGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder';
import {GetApplicableContentTypesForListWithListIdRequestBuilder} from './microsoftGraphGetApplicableContentTypesForListWithListId/getApplicableContentTypesForListWithListIdRequestBuilder';
import {GetByPathWithPathRequestBuilder} from './microsoftGraphGetByPathWithPath/getByPathWithPathRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {RichLongRunningOperationItemRequestBuilder} from './operations/item/richLongRunningOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PermissionItemRequestBuilder} from './permissions/item/permissionItemRequestBuilder';
import {PermissionsRequestBuilder} from './permissions/permissionsRequestBuilder';
import {SiteItemRequestBuilderGetRequestConfiguration} from './siteItemRequestBuilderGetRequestConfiguration';
import {SiteItemRequestBuilderPatchRequestConfiguration} from './siteItemRequestBuilderPatchRequestConfiguration';
import {SiteItemRequestBuilder as I34352243acde4f04025d9bd40412abb7026aa82d69720baf2648e482ee4fba2a} from './sites/item/siteItemRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {TermStoreRequestBuilder} from './termStore/termStoreRequestBuilder';
import {StoreItemRequestBuilder} from './termStores/item/storeItemRequestBuilder';
import {TermStoresRequestBuilder} from './termStores/termStoresRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sites property of the microsoft.graph.group entity.
 */
export class SiteItemRequestBuilder {
    /** Provides operations to manage the analytics property of the microsoft.graph.site entity. */
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columns property of the microsoft.graph.site entity. */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contentTypes property of the microsoft.graph.site entity. */
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drive property of the microsoft.graph.site entity. */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drives property of the microsoft.graph.site entity. */
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the externalColumns property of the microsoft.graph.site entity. */
    public get externalColumns(): ExternalColumnsRequestBuilder {
        return new ExternalColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the items property of the microsoft.graph.site entity. */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lists property of the microsoft.graph.site entity. */
    public get lists(): ListsRequestBuilder {
        return new ListsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getActivitiesByInterval method. */
    public get microsoftGraphGetActivitiesByInterval(): GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the onenote property of the microsoft.graph.site entity. */
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.site entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the permissions property of the microsoft.graph.site entity. */
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the sites property of the microsoft.graph.site entity. */
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the termStore property of the microsoft.graph.site entity. */
    public get termStore(): TermStoreRequestBuilder {
        return new TermStoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the termStores property of the microsoft.graph.site entity. */
    public get termStores(): TermStoresRequestBuilder {
        return new TermStoresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the columns property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : Icada710d4aef7b6c8f82248ec735428e6f92768cd1ab43adeb90e6f5fd47fde2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new Icada710d4aef7b6c8f82248ec735428e6f92768cd1ab43adeb90e6f5fd47fde2(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SiteItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param siteId key: id of site
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, siteId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["site%2Did"] = siteId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a ContentTypeItemRequestBuilder
     */
    public contentTypesById(id: string) : ContentTypeItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did"] = id
        return new ContentTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the drives property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the externalColumns property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public externalColumnsById(id: string) : Ic16ad1c309947404cf477a119b524103aa2aae0a2aacef74a4a4efed10eed7f9 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new Ic16ad1c309947404cf477a119b524103aa2aae0a2aacef74a4a4efed10eed7f9(urlTplParams, this.requestAdapter);
    };
    /**
     * The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Site
     */
    public get(requestConfiguration?: SiteItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Site | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Site>(requestInfo, createSiteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the items property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a BaseItemItemRequestBuilder
     */
    public itemsById(id: string) : BaseItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["baseItem%2Did"] = id
        return new BaseItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the lists property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a ListItemRequestBuilder
     */
    public listsById(id: string) : ListItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["list%2Did"] = id
        return new ListItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @param endDateTime Usage: endDateTime='{endDateTime}'
     * @param interval Usage: interval='{interval}'
     * @param startDateTime Usage: startDateTime='{startDateTime}'
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
    public microsoftGraphGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(endDateTime: string | undefined, interval: string | undefined, startDateTime: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!interval) throw new Error("interval cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, interval, startDateTime);
    };
    /**
     * Provides operations to call the getApplicableContentTypesForList method.
     * @param listId Usage: listId='{listId}'
     * @returns a getApplicableContentTypesForListWithListIdRequestBuilder
     */
    public microsoftGraphGetApplicableContentTypesForListWithListId(listId: string | undefined) : GetApplicableContentTypesForListWithListIdRequestBuilder {
        if(!listId) throw new Error("listId cannot be undefined");
        return new GetApplicableContentTypesForListWithListIdRequestBuilder(this.pathParameters, this.requestAdapter, listId);
    };
    /**
     * Provides operations to call the getByPath method.
     * @param path Usage: path='{path}'
     * @returns a getByPathWithPathRequestBuilder
     */
    public microsoftGraphGetByPathWithPath(path: string | undefined) : GetByPathWithPathRequestBuilder {
        if(!path) throw new Error("path cannot be undefined");
        return new GetByPathWithPathRequestBuilder(this.pathParameters, this.requestAdapter, path);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a RichLongRunningOperationItemRequestBuilder
     */
    public operationsById(id: string) : RichLongRunningOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["richLongRunningOperation%2Did"] = id
        return new RichLongRunningOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property sites in groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Site
     */
    public patch(body: Site | undefined, requestConfiguration?: SiteItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Site | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Site>(requestInfo, createSiteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the permissions property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a PermissionItemRequestBuilder
     */
    public permissionsById(id: string) : PermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission%2Did"] = id
        return new PermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the sites property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a SiteItemRequestBuilder
     */
    public sitesById(id: string) : I34352243acde4f04025d9bd40412abb7026aa82d69720baf2648e482ee4fba2a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did1"] = id
        return new I34352243acde4f04025d9bd40412abb7026aa82d69720baf2648e482ee4fba2a(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the termStores property of the microsoft.graph.site entity.
     * @param id Unique identifier of the item
     * @returns a StoreItemRequestBuilder
     */
    public termStoresById(id: string) : StoreItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["store%2Did"] = id
        return new StoreItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SiteItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property sites in groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Site | undefined, requestConfiguration?: SiteItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
