import { type ActivityHistoryItem } from '../../../../../models/activityHistoryItem';
import { createActivityHistoryItemFromDiscriminatorValue } from '../../../../../models/createActivityHistoryItemFromDiscriminatorValue';
import { deserializeIntoActivityHistoryItem } from '../../../../../models/deserializeIntoActivityHistoryItem';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeActivityHistoryItem } from '../../../../../models/serializeActivityHistoryItem';
import { ActivityRequestBuilder } from './activity/activityRequestBuilder';
import { type ActivityHistoryItemItemRequestBuilderDeleteRequestConfiguration } from './activityHistoryItemItemRequestBuilderDeleteRequestConfiguration';
import { type ActivityHistoryItemItemRequestBuilderGetRequestConfiguration } from './activityHistoryItemItemRequestBuilderGetRequestConfiguration';
import { type ActivityHistoryItemItemRequestBuilderPatchRequestConfiguration } from './activityHistoryItemItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the historyItems property of the microsoft.graph.userActivity entity.
 */
export class ActivityHistoryItemItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the activity property of the microsoft.graph.activityHistoryItem entity.
     */
    public get activity(): ActivityRequestBuilder {
        return new ActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ActivityHistoryItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/activities/{userActivity%2Did}/historyItems/{activityHistoryItem%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property historyItems for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ActivityHistoryItemItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityHistoryItem
     */
    public get(requestConfiguration?: ActivityHistoryItemItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ActivityHistoryItem | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ActivityHistoryItem>(requestInfo, createActivityHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new or replace an existing history item for an existing user activity.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityHistoryItem
     * @see {@link https://learn.microsoft.com/graph/api/projectrome-put-historyitem?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ActivityHistoryItem, requestConfiguration?: ActivityHistoryItemItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ActivityHistoryItem | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ActivityHistoryItem>(requestInfo, createActivityHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property historyItems for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ActivityHistoryItemItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivityHistoryItemItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new or replace an existing history item for an existing user activity.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ActivityHistoryItem, requestConfiguration?: ActivityHistoryItemItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeActivityHistoryItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ActivityHistoryItemItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ActivityHistoryItemItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ActivityHistoryItemItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
