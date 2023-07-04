import {ListItemCollectionResponse} from '../../../../../models/';
import {createListItemCollectionResponseFromDiscriminatorValue} from '../../../../../models/createListItemCollectionResponseFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from '../../../../../models/createListItemFromDiscriminatorValue';
import {deserializeIntoListItem} from '../../../../../models/deserializeIntoListItem';
import {ListItem} from '../../../../../models/listItem';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeListItem} from '../../../../../models/serializeListItem';
import {ListItemItemRequestBuilder} from './item/listItemItemRequestBuilder';
import {ItemsRequestBuilderGetRequestConfiguration} from './itemsRequestBuilderGetRequestConfiguration';
import {ItemsRequestBuilderPostRequestConfiguration} from './itemsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.list entity.
 */
export class ItemsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the items property of the microsoft.graph.list entity.
     * @param listItemId Unique identifier of the item
     * @returns a ListItemItemRequestBuilder
     */
    public byListItemId(listItemId: string) : ListItemItemRequestBuilder {
        if(!listItemId) throw new Error("listItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["listItem%2Did"] = listItemId
        return new ListItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/lists/{list%2Did}/items{?%24top,%24skip,%24search,%24filter,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the collection of [items][item] in a [list][].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListItemCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/listitem-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ItemsRequestBuilderGetRequestConfiguration | undefined) : Promise<ListItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListItemCollectionResponse>(requestInfo, createListItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new [listItem][] in a [list][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListItem
     * @see {@link https://docs.microsoft.com/graph/api/listitem-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ListItem | undefined, requestConfiguration?: ItemsRequestBuilderPostRequestConfiguration | undefined) : Promise<ListItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListItem>(requestInfo, createListItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the collection of [items][item] in a [list][].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new [listItem][] in a [list][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ListItem | undefined, requestConfiguration?: ItemsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeListItem);
        return requestInfo;
    };
}
