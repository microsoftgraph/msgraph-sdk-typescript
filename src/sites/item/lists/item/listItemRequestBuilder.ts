import {List} from '../../../../models/';
import {createListFromDiscriminatorValue} from '../../../../models/createListFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {ContentTypeItemRequestBuilder} from './contentTypes/item/contentTypeItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {ListItemItemRequestBuilder} from './items/item/listItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListItemRequestBuilderDeleteRequestConfiguration} from './listItemRequestBuilderDeleteRequestConfiguration';
import {ListItemRequestBuilderGetRequestConfiguration} from './listItemRequestBuilderGetRequestConfiguration';
import {ListItemRequestBuilderPatchRequestConfiguration} from './listItemRequestBuilderPatchRequestConfiguration';
import {RichLongRunningOperationItemRequestBuilder} from './operations/item/richLongRunningOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {SubscriptionItemRequestBuilder} from './subscriptions/item/subscriptionItemRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the lists property of the microsoft.graph.site entity. */
export class ListItemRequestBuilder {
    /** Provides operations to manage the columns property of the microsoft.graph.list entity. */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contentTypes property of the microsoft.graph.list entity. */
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drive property of the microsoft.graph.list entity. */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the items property of the microsoft.graph.list entity. */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.list entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the subscriptions property of the microsoft.graph.list entity. */
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the columns property of the microsoft.graph.list entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : ColumnDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new ColumnDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ListItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/sites/{site%2Did}/lists/{list%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
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
     * Delete navigation property lists for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ListItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The collection of lists under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ListItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property lists in sites
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: List | undefined, requestConfiguration?: ListItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property lists for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ListItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of lists under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of List
     */
    public get(requestConfiguration?: ListItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<List | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<List>(requestInfo, createListFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the items property of the microsoft.graph.list entity.
     * @param id Unique identifier of the item
     * @returns a ListItemItemRequestBuilder
     */
    public itemsById(id: string) : ListItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["listItem%2Did"] = id
        return new ListItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.list entity.
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
     * Update the navigation property lists in sites
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of List
     */
    public patch(body: List | undefined, requestConfiguration?: ListItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<List | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<List>(requestInfo, createListFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.list entity.
     * @param id Unique identifier of the item
     * @returns a SubscriptionItemRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription%2Did"] = id
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
