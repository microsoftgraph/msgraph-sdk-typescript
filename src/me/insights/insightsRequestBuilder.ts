import {OfficeGraphInsights} from '../../models/';
import {createOfficeGraphInsightsFromDiscriminatorValue} from '../../models/createOfficeGraphInsightsFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {InsightsRequestBuilderDeleteRequestConfiguration} from './insightsRequestBuilderDeleteRequestConfiguration';
import {InsightsRequestBuilderGetRequestConfiguration} from './insightsRequestBuilderGetRequestConfiguration';
import {InsightsRequestBuilderPatchRequestConfiguration} from './insightsRequestBuilderPatchRequestConfiguration';
import {SharedInsightItemRequestBuilder} from './shared/item/sharedInsightItemRequestBuilder';
import {SharedRequestBuilder} from './shared/sharedRequestBuilder';
import {TrendingItemRequestBuilder} from './trending/item/trendingItemRequestBuilder';
import {TrendingRequestBuilder} from './trending/trendingRequestBuilder';
import {UsedInsightItemRequestBuilder} from './used/item/usedInsightItemRequestBuilder';
import {UsedRequestBuilder} from './used/usedRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the insights property of the microsoft.graph.user entity.
 */
export class InsightsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the shared property of the microsoft.graph.officeGraphInsights entity. */
    public get shared(): SharedRequestBuilder {
        return new SharedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the trending property of the microsoft.graph.officeGraphInsights entity. */
    public get trending(): TrendingRequestBuilder {
        return new TrendingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the used property of the microsoft.graph.officeGraphInsights entity. */
    public get used(): UsedRequestBuilder {
        return new UsedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new InsightsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/insights{?%24select,%24expand}");
    };
    /**
     * Delete navigation property insights for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public delete(requestConfiguration?: InsightsRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
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
     * Get insights from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OfficeGraphInsights
     */
    public get(requestConfiguration?: InsightsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OfficeGraphInsights | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OfficeGraphInsights>(requestInfo, createOfficeGraphInsightsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property insights in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OfficeGraphInsights
     */
    public patch(body: OfficeGraphInsights | undefined, requestConfiguration?: InsightsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OfficeGraphInsights | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OfficeGraphInsights>(requestInfo, createOfficeGraphInsightsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the shared property of the microsoft.graph.officeGraphInsights entity.
     * @param id Unique identifier of the item
     * @returns a SharedInsightItemRequestBuilder
     */
    public sharedById(id: string) : SharedInsightItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedInsight%2Did"] = id
        return new SharedInsightItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property insights for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: InsightsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get insights from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InsightsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property insights in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OfficeGraphInsights | undefined, requestConfiguration?: InsightsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Provides operations to manage the trending property of the microsoft.graph.officeGraphInsights entity.
     * @param id Unique identifier of the item
     * @returns a TrendingItemRequestBuilder
     */
    public trendingById(id: string) : TrendingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["trending%2Did"] = id
        return new TrendingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the used property of the microsoft.graph.officeGraphInsights entity.
     * @param id Unique identifier of the item
     * @returns a UsedInsightItemRequestBuilder
     */
    public usedById(id: string) : UsedInsightItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["usedInsight%2Did"] = id
        return new UsedInsightItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
