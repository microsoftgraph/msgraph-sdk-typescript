import {ItemActivityCollectionResponse} from '../../../../../../models/';
import {createItemActivityCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createItemActivityCollectionResponseFromDiscriminatorValue';
import {createItemActivityFromDiscriminatorValue} from '../../../../../../models/createItemActivityFromDiscriminatorValue';
import {deserializeIntoItemActivity} from '../../../../../../models/deserializeIntoItemActivity';
import type {ItemActivity} from '../../../../../../models/itemActivity';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeItemActivity} from '../../../../../../models/serializeItemActivity';
import {ActivitiesRequestBuilderGetRequestConfiguration} from './activitiesRequestBuilderGetRequestConfiguration';
import {ActivitiesRequestBuilderPostRequestConfiguration} from './activitiesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ItemActivityItemRequestBuilder} from './item/itemActivityItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activities property of the microsoft.graph.itemActivityStat entity.
 */
export class ActivitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the activities property of the microsoft.graph.itemActivityStat entity.
     * @param itemActivityId The unique identifier of itemActivity
     * @returns a ItemActivityItemRequestBuilder
     */
    public byItemActivityId(itemActivityId: string) : ItemActivityItemRequestBuilder {
        if(!itemActivityId) throw new Error("itemActivityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["itemActivity%2Did"] = itemActivityId
        return new ItemActivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ActivitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/analytics/itemActivityStats/{itemActivityStat%2Did}/activities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Exposes the itemActivities represented in this itemActivityStat resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivityCollectionResponse
     */
    public get(requestConfiguration?: ActivitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<ItemActivityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemActivityCollectionResponse>(requestInfo, createItemActivityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to activities for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivity
     */
    public post(body: ItemActivity, requestConfiguration?: ActivitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<ItemActivity | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemActivity>(requestInfo, createItemActivityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Exposes the itemActivities represented in this itemActivityStat resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to activities for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ItemActivity, requestConfiguration?: ActivitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeItemActivity);
        return requestInfo;
    };
}
