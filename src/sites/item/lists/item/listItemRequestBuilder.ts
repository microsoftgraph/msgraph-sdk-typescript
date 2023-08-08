import {createListFromDiscriminatorValue} from '../../../../models/createListFromDiscriminatorValue';
import {deserializeIntoList} from '../../../../models/deserializeIntoList';
import type {List} from '../../../../models/list';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeList} from '../../../../models/serializeList';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ContentTypesRequestBuilder} from './contentTypes/contentTypesRequestBuilder';
import {CreatedByUserRequestBuilder} from './createdByUser/createdByUserRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {LastModifiedByUserRequestBuilder} from './lastModifiedByUser/lastModifiedByUserRequestBuilder';
import {ListItemRequestBuilderDeleteRequestConfiguration} from './listItemRequestBuilderDeleteRequestConfiguration';
import {ListItemRequestBuilderGetRequestConfiguration} from './listItemRequestBuilderGetRequestConfiguration';
import {ListItemRequestBuilderPatchRequestConfiguration} from './listItemRequestBuilderPatchRequestConfiguration';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lists property of the microsoft.graph.site entity.
 */
export class ListItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the columns property of the microsoft.graph.list entity.
     */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
     */
    public get contentTypes(): ContentTypesRequestBuilder {
        return new ContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
     */
    public get createdByUser(): CreatedByUserRequestBuilder {
        return new CreatedByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the drive property of the microsoft.graph.list entity.
     */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the items property of the microsoft.graph.list entity.
     */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
     */
    public get lastModifiedByUser(): LastModifiedByUserRequestBuilder {
        return new LastModifiedByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.list entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.list entity.
     */
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ListItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/lists/{list%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property lists for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ListItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Get a list of rich long-running operations associated with a list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of List
     * @see {@link https://learn.microsoft.com/graph/api/list-list-operations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ListItemRequestBuilderGetRequestConfiguration | undefined) : Promise<List | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<List>(requestInfo, createListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property lists in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of List
     */
    public patch(body: List, requestConfiguration?: ListItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<List | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<List>(requestInfo, createListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property lists for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ListItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a list of rich long-running operations associated with a list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ListItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property lists in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: List, requestConfiguration?: ListItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeList);
        return requestInfo;
    };
}
