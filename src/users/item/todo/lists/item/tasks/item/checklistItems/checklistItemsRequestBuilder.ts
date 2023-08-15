import {ChecklistItemCollectionResponse} from '../../../../../../../../models/';
import type {ChecklistItem} from '../../../../../../../../models/checklistItem';
import {createChecklistItemCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createChecklistItemCollectionResponseFromDiscriminatorValue';
import {createChecklistItemFromDiscriminatorValue} from '../../../../../../../../models/createChecklistItemFromDiscriminatorValue';
import {deserializeIntoChecklistItem} from '../../../../../../../../models/deserializeIntoChecklistItem';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeChecklistItem} from '../../../../../../../../models/serializeChecklistItem';
import {ChecklistItemsRequestBuilderGetRequestConfiguration} from './checklistItemsRequestBuilderGetRequestConfiguration';
import {ChecklistItemsRequestBuilderPostRequestConfiguration} from './checklistItemsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ChecklistItemItemRequestBuilder} from './item/checklistItemItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the checklistItems property of the microsoft.graph.todoTask entity.
 */
export class ChecklistItemsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the checklistItems property of the microsoft.graph.todoTask entity.
     * @param checklistItemId The unique identifier of checklistItem
     * @returns a ChecklistItemItemRequestBuilder
     */
    public byChecklistItemId(checklistItemId: string) : ChecklistItemItemRequestBuilder {
        if(!checklistItemId) throw new Error("checklistItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["checklistItem%2Did"] = checklistItemId
        return new ChecklistItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ChecklistItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}/checklistItems{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the checklistItem resources associated to a todoTask from the checklistItems navigation property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChecklistItemCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/todotask-list-checklistitems?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChecklistItemsRequestBuilderGetRequestConfiguration | undefined) : Promise<ChecklistItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChecklistItemCollectionResponse>(requestInfo, createChecklistItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new checklistItem object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChecklistItem
     * @see {@link https://learn.microsoft.com/graph/api/todotask-post-checklistitems?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ChecklistItem, requestConfiguration?: ChecklistItemsRequestBuilderPostRequestConfiguration | undefined) : Promise<ChecklistItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChecklistItem>(requestInfo, createChecklistItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the checklistItem resources associated to a todoTask from the checklistItems navigation property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChecklistItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new checklistItem object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ChecklistItem, requestConfiguration?: ChecklistItemsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeChecklistItem);
        return requestInfo;
    };
}
