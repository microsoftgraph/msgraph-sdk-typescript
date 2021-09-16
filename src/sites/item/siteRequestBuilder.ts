import {Site} from '../../../site';
import {AnalyticsRequestBuilder} from '../analytics/analyticsRequestBuilder';
import {ColumnsRequestBuilder} from '../columns/columnsRequestBuilder';
import {ColumnDefinitionRequestBuilder} from '../columns/item/item/columnDefinitionRequestBuilder';
import {ContentTypesRequestBuilder} from '../contentTypes/contentTypesRequestBuilder';
import {ContentTypeRequestBuilder} from '../contentTypes/item/item/contentTypeRequestBuilder';
import {DriveRequestBuilder} from '../drive/driveRequestBuilder';
import {DrivesRequestBuilder} from '../drives/drivesRequestBuilder';
import {DriveRequestBuilder} from '../drives/item/item/driveRequestBuilder';
import {GetActivitiesByIntervalRequestBuilder} from '../getActivitiesByInterval/getActivitiesByIntervalRequestBuilder';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder} from '../getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder';
import {GetByPathWithPathRequestBuilder} from '../getByPathWithPath/getByPathWithPathRequestBuilder';
import {BaseItemRequestBuilder} from '../items/item/item/baseItemRequestBuilder';
import {ItemsRequestBuilder} from '../items/itemsRequestBuilder';
import {ListRequestBuilder} from '../lists/item/item/listRequestBuilder';
import {ListsRequestBuilder} from '../lists/listsRequestBuilder';
import {OnenoteRequestBuilder} from '../onenote/onenoteRequestBuilder';
import {PermissionRequestBuilder} from '../permissions/item/item/permissionRequestBuilder';
import {PermissionsRequestBuilder} from '../permissions/permissionsRequestBuilder';
import {SiteRequestBuilder} from '../sites/item/item/siteRequestBuilder';
import {SitesRequestBuilder} from '../sites/sitesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /sites/{site-id}  */
export class SiteRequestBuilder {
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get lists(): ListsRequestBuilder {
        return new ListsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionRequestBuilder
     */
    public columnsById(id: String) : ColumnDefinitionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ColumnDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/columns/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new SiteRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.contentTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeRequestBuilder
     */
    public contentTypesById(id: String) : ContentTypeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ContentTypeRequestBuilder(this.currentPath + this.pathSegment + "/contentTypes/" + id, this.httpCore, false);
    };
    /**
     * Delete entity from sites
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Get entity from sites by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update entity in sites
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Site | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Delete entity from sites
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: String) : DriveRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    /**
     * Get entity from sites by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Site
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Site | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Site>(requestInfo, Site, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /sites/{site-id}/microsoft.graph.getActivitiesByInterval()
     * @returns a getActivitiesByIntervalRequestBuilder
     */
    public getActivitiesByInterval() : GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
        return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, startDateTime, endDateTime, interval, false);
    };
    /**
     * Builds and executes requests for operations under /sites/{site-id}/microsoft.graph.getByPath(path='{path}')
     * @param path Usage: path={path}
     * @returns a getByPathWithPathRequestBuilder
     */
    public getByPathWithPath(path: string | undefined) : GetByPathWithPathRequestBuilder {
        if(!path) throw new Error("path cannot be undefined");
        return new GetByPathWithPathRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, path, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.items.item collection
     * @param id Unique identifier of the item
     * @returns a baseItemRequestBuilder
     */
    public itemsById(id: String) : BaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new BaseItemRequestBuilder(this.currentPath + this.pathSegment + "/items/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.lists.item collection
     * @param id Unique identifier of the item
     * @returns a listRequestBuilder
     */
    public listsById(id: String) : ListRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ListRequestBuilder(this.currentPath + this.pathSegment + "/lists/" + id, this.httpCore, false);
    };
    /**
     * Update entity in sites
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Site | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.permissions.item collection
     * @param id Unique identifier of the item
     * @returns a permissionRequestBuilder
     */
    public permissionsById(id: String) : PermissionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PermissionRequestBuilder(this.currentPath + this.pathSegment + "/permissions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteRequestBuilder
     */
    public sitesById(id: String) : SiteRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SiteRequestBuilder(this.currentPath + this.pathSegment + "/sites/" + id, this.httpCore, false);
    };
}
