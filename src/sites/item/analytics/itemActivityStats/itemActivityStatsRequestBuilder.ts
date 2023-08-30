import {ItemActivityStatCollectionResponse} from '../../../../models/';
import {createItemActivityStatCollectionResponseFromDiscriminatorValue} from '../../../../models/createItemActivityStatCollectionResponseFromDiscriminatorValue';
import {createItemActivityStatFromDiscriminatorValue} from '../../../../models/createItemActivityStatFromDiscriminatorValue';
import {deserializeIntoItemActivityStat} from '../../../../models/deserializeIntoItemActivityStat';
import type {ItemActivityStat} from '../../../../models/itemActivityStat';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeItemActivityStat} from '../../../../models/serializeItemActivityStat';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ItemActivityStatItemRequestBuilder} from './item/itemActivityStatItemRequestBuilder';
import {ItemActivityStatsRequestBuilderGetRequestConfiguration} from './itemActivityStatsRequestBuilderGetRequestConfiguration';
import {ItemActivityStatsRequestBuilderPostRequestConfiguration} from './itemActivityStatsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
 */
export class ItemActivityStatsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
     * @param itemActivityStatId The unique identifier of itemActivityStat
     * @returns a ItemActivityStatItemRequestBuilder
     */
    public byItemActivityStatId(itemActivityStatId: string) : ItemActivityStatItemRequestBuilder {
        if(!itemActivityStatId) throw new Error("itemActivityStatId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["itemActivityStat%2Did"] = itemActivityStatId
        return new ItemActivityStatItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ItemActivityStatsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/analytics/itemActivityStats{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get itemActivityStats from sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivityStatCollectionResponse
     */
    public get(requestConfiguration?: ItemActivityStatsRequestBuilderGetRequestConfiguration | undefined) : Promise<ItemActivityStatCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemActivityStatCollectionResponse>(requestInfo, createItemActivityStatCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to itemActivityStats for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivityStat
     */
    public post(body: ItemActivityStat, requestConfiguration?: ItemActivityStatsRequestBuilderPostRequestConfiguration | undefined) : Promise<ItemActivityStat | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemActivityStat>(requestInfo, createItemActivityStatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get itemActivityStats from sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ItemActivityStatsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to itemActivityStats for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ItemActivityStat, requestConfiguration?: ItemActivityStatsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeItemActivityStat);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a itemActivityStatsRequestBuilder
     */
    public withUrl(rawUrl: string) : ItemActivityStatsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ItemActivityStatsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
