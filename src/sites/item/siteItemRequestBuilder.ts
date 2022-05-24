import {SiteImpl} from '../../models/';
import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {ODataErrorImpl} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {Site} from '../../models/site';
import {AnalyticsRequestBuilder} from './analytics/analyticsRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i9e96a391426d4e53c2e7f6e9128838b07c0c1429de7da4576568f71d5985d839} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {ContentTypeItemRequestBuilder} from './contentTypes/item/contentTypeItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {ExternalColumnsRequestBuilder} from './externalColumns/externalColumnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i5af8c8b4180030ca52bdaf35671f120ba82bee933b95da7d925fcf113d77ce01} from './externalColumns/item/columnDefinitionItemRequestBuilder';
import {GetActivitiesByIntervalRequestBuilder} from './getActivitiesByInterval/getActivitiesByIntervalRequestBuilder';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder';
import {GetApplicableContentTypesForListWithListIdRequestBuilder} from './getApplicableContentTypesForListWithListId/getApplicableContentTypesForListWithListIdRequestBuilder';
import {GetByPathWithPathRequestBuilder} from './getByPathWithPath/getByPathWithPathRequestBuilder';
import {BaseItemItemRequestBuilder} from './items/item/baseItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListItemRequestBuilder} from './lists/item/listItemRequestBuilder';
import {ListsRequestBuilder} from './lists/listsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {RichLongRunningOperationItemRequestBuilder} from './operations/item/richLongRunningOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PermissionItemRequestBuilder} from './permissions/item/permissionItemRequestBuilder';
import {PermissionsRequestBuilder} from './permissions/permissionsRequestBuilder';
import {SiteItemRequestBuilderGetRequestConfiguration} from './siteItemRequestBuilderGetRequestConfiguration';
import {SiteItemRequestBuilderPatchRequestConfiguration} from './siteItemRequestBuilderPatchRequestConfiguration';
import {SiteItemRequestBuilder as ie75d660ac583515f2a50c0ae995ecf2c299e734cd501de4e0047887c6eb6efda} from './sites/item/siteItemRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {TermStoreRequestBuilder} from './termStore/termStoreRequestBuilder';
import {StoreItemRequestBuilder} from './termStores/item/storeItemRequestBuilder';
import {TermStoresRequestBuilder} from './termStores/termStoresRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of site entities. */
export class SiteItemRequestBuilder {
    /** The analytics property */
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columns property */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The contentTypes property */
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The drive property */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The drives property */
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The externalColumns property */
    public get externalColumns(): ExternalColumnsRequestBuilder {
        return new ExternalColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The items property */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The lists property */
    public get lists(): ListsRequestBuilder {
        return new ListsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The onenote property */
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The operations property */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The permissions property */
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The sites property */
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The termStore property */
    public get termStore(): TermStoreRequestBuilder {
        return new TermStoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The termStores property */
    public get termStores(): TermStoresRequestBuilder {
        return new TermStoresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.sites.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : i9e96a391426d4e53c2e7f6e9128838b07c0c1429de7da4576568f71d5985d839 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new i9e96a391426d4e53c2e7f6e9128838b07c0c1429de7da4576568f71d5985d839(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SiteItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/sites/{site%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.contentTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeItemRequestBuilder
     */
    public contentTypesById(id: string) : ContentTypeItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did"] = id
        return new ContentTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve properties and relationships for a [site][] resource.A **site** resource represents a team site in SharePoint.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SiteItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update entity in sites
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Site | undefined, requestConfiguration?: SiteItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new SiteImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.externalColumns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public externalColumnsById(id: string) : i5af8c8b4180030ca52bdaf35671f120ba82bee933b95da7d925fcf113d77ce01 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new i5af8c8b4180030ca52bdaf35671f120ba82bee933b95da7d925fcf113d77ce01(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve properties and relationships for a [site][] resource.A **site** resource represents a team site in SharePoint.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Site
     */
    public get(requestConfiguration?: SiteItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SiteImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SiteImpl>(requestInfo, createSiteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @returns a getActivitiesByIntervalRequestBuilder
     */
    public getActivitiesByInterval() : GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @param endDateTime Usage: endDateTime='{endDateTime}'
     * @param interval Usage: interval='{interval}'
     * @param startDateTime Usage: startDateTime='{startDateTime}'
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
    public getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(endDateTime: string | undefined, interval: string | undefined, startDateTime: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder {
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
    public getApplicableContentTypesForListWithListId(listId: string | undefined) : GetApplicableContentTypesForListWithListIdRequestBuilder {
        if(!listId) throw new Error("listId cannot be undefined");
        return new GetApplicableContentTypesForListWithListIdRequestBuilder(this.pathParameters, this.requestAdapter, listId);
    };
    /**
     * Provides operations to call the getByPath method.
     * @param path Usage: path='{path}'
     * @returns a getByPathWithPathRequestBuilder
     */
    public getByPathWithPath(path: string | undefined) : GetByPathWithPathRequestBuilder {
        if(!path) throw new Error("path cannot be undefined");
        return new GetByPathWithPathRequestBuilder(this.pathParameters, this.requestAdapter, path);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.items.item collection
     * @param id Unique identifier of the item
     * @returns a baseItemItemRequestBuilder
     */
    public itemsById(id: string) : BaseItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["baseItem%2Did"] = id
        return new BaseItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.lists.item collection
     * @param id Unique identifier of the item
     * @returns a listItemRequestBuilder
     */
    public listsById(id: string) : ListItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["list%2Did"] = id
        return new ListItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.operations.item collection
     * @param id Unique identifier of the item
     * @returns a richLongRunningOperationItemRequestBuilder
     */
    public operationsById(id: string) : RichLongRunningOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["richLongRunningOperation%2Did"] = id
        return new RichLongRunningOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in sites
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Site | undefined, requestConfiguration?: SiteItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.permissions.item collection
     * @param id Unique identifier of the item
     * @returns a permissionItemRequestBuilder
     */
    public permissionsById(id: string) : PermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission%2Did"] = id
        return new PermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteItemRequestBuilder
     */
    public sitesById(id: string) : ie75d660ac583515f2a50c0ae995ecf2c299e734cd501de4e0047887c6eb6efda {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did1"] = id
        return new ie75d660ac583515f2a50c0ae995ecf2c299e734cd501de4e0047887c6eb6efda(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.termStores.item collection
     * @param id Unique identifier of the item
     * @returns a storeItemRequestBuilder
     */
    public termStoresById(id: string) : StoreItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["store%2Did"] = id
        return new StoreItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
