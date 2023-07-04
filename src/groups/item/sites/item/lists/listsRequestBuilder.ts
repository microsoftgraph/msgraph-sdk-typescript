import {ListCollectionResponse} from '../../../../../models/';
import {createListCollectionResponseFromDiscriminatorValue} from '../../../../../models/createListCollectionResponseFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from '../../../../../models/createListFromDiscriminatorValue';
import {deserializeIntoList} from '../../../../../models/deserializeIntoList';
import {List} from '../../../../../models/list';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeList} from '../../../../../models/serializeList';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ListItemRequestBuilder} from './item/listItemRequestBuilder';
import {ListsRequestBuilderGetRequestConfiguration} from './listsRequestBuilderGetRequestConfiguration';
import {ListsRequestBuilderPostRequestConfiguration} from './listsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lists property of the microsoft.graph.site entity.
 */
export class ListsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the lists property of the microsoft.graph.site entity.
     * @param listId Unique identifier of the item
     * @returns a ListItemRequestBuilder
     */
    public byListId(listId: string) : ListItemRequestBuilder {
        if(!listId) throw new Error("listId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["list%2Did"] = listId
        return new ListItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ListsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/lists{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the collection of [lists][] for a [site][]. Lists with the [system][] facet are hidden by default.To list them, include `system` in your `$select` statement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/list-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ListsRequestBuilderGetRequestConfiguration | undefined) : Promise<ListCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListCollectionResponse>(requestInfo, createListCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new [list][] in a [site][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of List
     * @see {@link https://docs.microsoft.com/graph/api/list-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: List | undefined, requestConfiguration?: ListsRequestBuilderPostRequestConfiguration | undefined) : Promise<List | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<List>(requestInfo, createListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the collection of [lists][] for a [site][]. Lists with the [system][] facet are hidden by default.To list them, include `system` in your `$select` statement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ListsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new [list][] in a [site][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: List | undefined, requestConfiguration?: ListsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeList);
        return requestInfo;
    };
}
