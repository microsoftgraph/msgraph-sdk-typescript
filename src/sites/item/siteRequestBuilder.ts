import {Site} from '../../models/microsoft/graph/site';
import {AnalyticsRequestBuilder} from './analytics/analyticsRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionRequestBuilder} from './columns/item/columnDefinitionRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {ContentTypeRequestBuilder} from './contentTypes/item/contentTypeRequestBuilder';
import {DriveRequestBuilder as if1fa377b0bd7fb8e5c76f5fe9dcf5e8956ca925a4eb08351b8ddf3ab3750087b} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveRequestBuilder as if7500c77e24ce9533441cc6542d79806839264d3572988a0d4825527a4cce716} from './drives/item/driveRequestBuilder';
import {ExternalColumnsRequestBuilder} from './externalColumns/externalColumnsRequestBuilder';
import {GetActivitiesByIntervalRequestBuilder} from './getActivitiesByInterval/getActivitiesByIntervalRequestBuilder';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder';
import {GetApplicableContentTypesForListWithListIdRequestBuilder} from './getApplicableContentTypesForListWithListId/getApplicableContentTypesForListWithListIdRequestBuilder';
import {GetByPathWithPathRequestBuilder} from './getByPathWithPath/getByPathWithPathRequestBuilder';
import {BaseItemRequestBuilder} from './items/item/baseItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListRequestBuilder} from './lists/item/listRequestBuilder';
import {ListsRequestBuilder} from './lists/listsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {PermissionRequestBuilder} from './permissions/item/permissionRequestBuilder';
import {PermissionsRequestBuilder} from './permissions/permissionsRequestBuilder';
import {SiteRequestBuilder as id3ccdfa5612ed9e34f2e27d79938dfaeb307a2575694f9b174c809a1f697c132} from './sites/item/siteRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {TermStoreRequestBuilder} from './termStore/termStoreRequestBuilder';
import {StoreRequestBuilder} from './termStores/item/storeRequestBuilder';
import {TermStoresRequestBuilder} from './termStores/termStoresRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /sites/{site-id}  */
export class SiteRequestBuilder {
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): if1fa377b0bd7fb8e5c76f5fe9dcf5e8956ca925a4eb08351b8ddf3ab3750087b {
        return new if1fa377b0bd7fb8e5c76f5fe9dcf5e8956ca925a4eb08351b8ddf3ab3750087b(this.pathParameters, this.requestAdapter);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get externalColumns(): ExternalColumnsRequestBuilder {
        return new ExternalColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get lists(): ListsRequestBuilder {
        return new ListsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get termStore(): TermStoreRequestBuilder {
        return new TermStoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get termStores(): TermStoresRequestBuilder {
        return new TermStoresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionRequestBuilder
     */
    public columnsById(id: string) : ColumnDefinitionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition_id"] = id
        return new ColumnDefinitionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SiteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/sites/{site_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.contentTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeRequestBuilder
     */
    public contentTypesById(id: string) : ContentTypeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType_id"] = id
        return new ContentTypeRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete entity from sites
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get entity from sites by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update entity in sites
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Site | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete entity from sites
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: string) : if7500c77e24ce9533441cc6542d79806839264d3572988a0d4825527a4cce716 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive_id"] = id
        return new if7500c77e24ce9533441cc6542d79806839264d3572988a0d4825527a4cce716(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from sites by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Site
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Site | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Site>(requestInfo, Site, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /sites/{site-id}/microsoft.graph.getActivitiesByInterval()
     * @returns a getActivitiesByIntervalRequestBuilder
     */
    public getActivitiesByInterval() : GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /sites/{site-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param interval Usage: interval={interval}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
    public getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(startDateTime: string | undefined, endDateTime: string | undefined, interval: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!interval) throw new Error("interval cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder(this.pathParameters, this.requestAdapter, startDateTime, endDateTime, interval);
    };
    /**
     * Builds and executes requests for operations under /sites/{site-id}/microsoft.graph.getApplicableContentTypesForList(listId='{listId}')
     * @param listId Usage: listId={listId}
     * @returns a getApplicableContentTypesForListWithListIdRequestBuilder
     */
    public getApplicableContentTypesForListWithListId(listId: string | undefined) : GetApplicableContentTypesForListWithListIdRequestBuilder {
        if(!listId) throw new Error("listId cannot be undefined");
        return new GetApplicableContentTypesForListWithListIdRequestBuilder(this.pathParameters, this.requestAdapter, listId);
    };
    /**
     * Builds and executes requests for operations under /sites/{site-id}/microsoft.graph.getByPath(path='{path}')
     * @param path Usage: path={path}
     * @returns a getByPathWithPathRequestBuilder
     */
    public getByPathWithPath(path: string | undefined) : GetByPathWithPathRequestBuilder {
        if(!path) throw new Error("path cannot be undefined");
        return new GetByPathWithPathRequestBuilder(this.pathParameters, this.requestAdapter, path);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.items.item collection
     * @param id Unique identifier of the item
     * @returns a baseItemRequestBuilder
     */
    public itemsById(id: string) : BaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["baseItem_id"] = id
        return new BaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.lists.item collection
     * @param id Unique identifier of the item
     * @returns a listRequestBuilder
     */
    public listsById(id: string) : ListRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["list_id"] = id
        return new ListRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in sites
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Site | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.permissions.item collection
     * @param id Unique identifier of the item
     * @returns a permissionRequestBuilder
     */
    public permissionsById(id: string) : PermissionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission_id"] = id
        return new PermissionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteRequestBuilder
     */
    public sitesById(id: string) : id3ccdfa5612ed9e34f2e27d79938dfaeb307a2575694f9b174c809a1f697c132 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site_id1"] = id
        return new id3ccdfa5612ed9e34f2e27d79938dfaeb307a2575694f9b174c809a1f697c132(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.termStores.item collection
     * @param id Unique identifier of the item
     * @returns a storeRequestBuilder
     */
    public termStoresById(id: string) : StoreRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["store_id"] = id
        return new StoreRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
