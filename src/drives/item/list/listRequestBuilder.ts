import {List} from '../../../list';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionRequestBuilder} from './columns/item/item/columnDefinitionRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {ContentTypeRequestBuilder} from './contentTypes/item/item/contentTypeRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {ListItemRequestBuilder} from './items/item/item/listItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {SubscriptionRequestBuilder} from './subscriptions/item/item/subscriptionRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /drives/{drive-id}/list  */
export class ListRequestBuilder {
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
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item.list.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionRequestBuilder
     */
    public columnsById(id: String) : ColumnDefinitionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ColumnDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/columns/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new ListRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/list";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item.list.contentTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeRequestBuilder
     */
    public contentTypesById(id: String) : ContentTypeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ContentTypeRequestBuilder(this.currentPath + this.pathSegment + "/contentTypes/" + id, this.httpCore, false);
    };
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
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
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
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
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: List | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
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
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of List
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<List | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<List>(requestInfo, List, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item.list.items.item collection
     * @param id Unique identifier of the item
     * @returns a listItemRequestBuilder
     */
    public itemsById(id: String) : ListItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ListItemRequestBuilder(this.currentPath + this.pathSegment + "/items/" + id, this.httpCore, false);
    };
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: List | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item.list.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a subscriptionRequestBuilder
     */
    public subscriptionsById(id: String) : SubscriptionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SubscriptionRequestBuilder(this.currentPath + this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
}
