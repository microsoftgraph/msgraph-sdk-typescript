import {List} from '../../../models/microsoft/graph/list';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {ContentTypeItemRequestBuilder} from './contentTypes/item/contentTypeItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {ListItemItemRequestBuilder} from './items/item/listItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {SubscriptionItemRequestBuilder} from './subscriptions/item/subscriptionItemRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /shares/{sharedDriveItem-id}/list  */
export class ListRequestBuilder {
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.shares.item.list.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : ColumnDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition_id"] = id
        return new ColumnDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ListRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/shares/{sharedDriveItem_id}/list{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.shares.item.list.contentTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeItemRequestBuilder
     */
    public contentTypesById(id: string) : ContentTypeItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType_id"] = id
        return new ContentTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Used to access the underlying list
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Used to access the underlying list
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
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Used to access the underlying list
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: List | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Used to access the underlying list
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Used to access the underlying list
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of List
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<List | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<List>(requestInfo, List, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.shares.item.list.items.item collection
     * @param id Unique identifier of the item
     * @returns a listItemItemRequestBuilder
     */
    public itemsById(id: string) : ListItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["listItem_id"] = id
        return new ListItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Used to access the underlying list
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: List | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.shares.item.list.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a subscriptionItemRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription_id"] = id
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}