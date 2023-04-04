import {ItemAnalytics} from '../../../../../models/';
import {createItemAnalyticsFromDiscriminatorValue} from '../../../../../models/createItemAnalyticsFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllTimeRequestBuilder} from './allTime/allTimeRequestBuilder';
import {AnalyticsRequestBuilderDeleteRequestConfiguration} from './analyticsRequestBuilderDeleteRequestConfiguration';
import {AnalyticsRequestBuilderGetRequestConfiguration} from './analyticsRequestBuilderGetRequestConfiguration';
import {AnalyticsRequestBuilderPatchRequestConfiguration} from './analyticsRequestBuilderPatchRequestConfiguration';
import {ItemActivityStatItemRequestBuilder} from './itemActivityStats/item/itemActivityStatItemRequestBuilder';
import {ItemActivityStatsRequestBuilder} from './itemActivityStats/itemActivityStatsRequestBuilder';
import {LastSevenDaysRequestBuilder} from './lastSevenDays/lastSevenDaysRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the analytics property of the microsoft.graph.driveItem entity.
 */
export class AnalyticsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the allTime property of the microsoft.graph.itemAnalytics entity. */
    public get allTime(): AllTimeRequestBuilder {
        return new AllTimeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity. */
    public get itemActivityStats(): ItemActivityStatsRequestBuilder {
        return new ItemActivityStatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lastSevenDays property of the microsoft.graph.itemAnalytics entity. */
    public get lastSevenDays(): LastSevenDaysRequestBuilder {
        return new LastSevenDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AnalyticsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/analytics{?%24select,%24expand}");
    };
    /**
     * Delete navigation property analytics for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public delete(requestConfiguration?: AnalyticsRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Analytics about the view activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ItemAnalytics
     */
    public get(requestConfiguration?: AnalyticsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ItemAnalytics | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ItemAnalytics>(requestInfo, createItemAnalyticsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
     * @param id Unique identifier of the item
     * @returns a ItemActivityStatItemRequestBuilder
     */
    public itemActivityStatsById(id: string) : ItemActivityStatItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["itemActivityStat%2Did"] = id
        return new ItemActivityStatItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property analytics in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ItemAnalytics
     */
    public patch(body: ItemAnalytics | undefined, requestConfiguration?: AnalyticsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ItemAnalytics | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ItemAnalytics>(requestInfo, createItemAnalyticsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property analytics for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AnalyticsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Analytics about the view activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AnalyticsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property analytics in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ItemAnalytics | undefined, requestConfiguration?: AnalyticsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
