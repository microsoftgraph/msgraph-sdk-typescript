import {ItemAnalytics} from '../../../../../../../../../models/';
import {createItemAnalyticsFromDiscriminatorValue} from '../../../../../../../../../models/createItemAnalyticsFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {AnalyticsRequestBuilderGetRequestConfiguration} from './analyticsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the analytics property of the microsoft.graph.listItem entity.
 */
export class AnalyticsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AnalyticsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/lists/{list%2Did}/items/{listItem%2Did}/analytics{?%24select,%24expand}");
    };
    /**
     * Analytics about the view activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemAnalytics
     */
    public get(requestConfiguration?: AnalyticsRequestBuilderGetRequestConfiguration | undefined) : Promise<ItemAnalytics | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemAnalytics>(requestInfo, createItemAnalyticsFromDiscriminatorValue, errorMapping);
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a analyticsRequestBuilder
     */
    public withUrl(rawUrl: string) : AnalyticsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AnalyticsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
