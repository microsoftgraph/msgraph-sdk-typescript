import {ActivityHistoryItemCollectionResponse} from '../../../../../models/';
import {ActivityHistoryItem} from '../../../../../models/activityHistoryItem';
import {createActivityHistoryItemCollectionResponseFromDiscriminatorValue} from '../../../../../models/createActivityHistoryItemCollectionResponseFromDiscriminatorValue';
import {createActivityHistoryItemFromDiscriminatorValue} from '../../../../../models/createActivityHistoryItemFromDiscriminatorValue';
import {deserializeIntoActivityHistoryItem} from '../../../../../models/deserializeIntoActivityHistoryItem';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeActivityHistoryItem} from '../../../../../models/serializeActivityHistoryItem';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HistoryItemsRequestBuilderGetRequestConfiguration} from './historyItemsRequestBuilderGetRequestConfiguration';
import {HistoryItemsRequestBuilderPostRequestConfiguration} from './historyItemsRequestBuilderPostRequestConfiguration';
import {ActivityHistoryItemItemRequestBuilder} from './item/activityHistoryItemItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the historyItems property of the microsoft.graph.userActivity entity.
 */
export class HistoryItemsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the historyItems property of the microsoft.graph.userActivity entity.
     * @param activityHistoryItemId Unique identifier of the item
     * @returns a ActivityHistoryItemItemRequestBuilder
     */
    public byActivityHistoryItemId(activityHistoryItemId: string) : ActivityHistoryItemItemRequestBuilder {
        if(!activityHistoryItemId) throw new Error("activityHistoryItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activityHistoryItem%2Did"] = activityHistoryItemId
        return new ActivityHistoryItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HistoryItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/activities/{userActivity%2Did}/historyItems{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityHistoryItemCollectionResponse
     */
    public get(requestConfiguration?: HistoryItemsRequestBuilderGetRequestConfiguration | undefined) : Promise<ActivityHistoryItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ActivityHistoryItemCollectionResponse>(requestInfo, createActivityHistoryItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to historyItems for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityHistoryItem
     */
    public post(body: ActivityHistoryItem | undefined, requestConfiguration?: HistoryItemsRequestBuilderPostRequestConfiguration | undefined) : Promise<ActivityHistoryItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ActivityHistoryItem>(requestInfo, createActivityHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HistoryItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to historyItems for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ActivityHistoryItem | undefined, requestConfiguration?: HistoryItemsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeActivityHistoryItem);
        return requestInfo;
    };
}
