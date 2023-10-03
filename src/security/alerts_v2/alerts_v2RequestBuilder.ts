import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { type AlertCollectionResponse } from '../../models/security/';
import { createAlertFromDiscriminatorValue, deserializeIntoAlert, serializeAlert, type Alert } from '../../models/security/alert';
import { createAlertCollectionResponseFromDiscriminatorValue } from '../../models/security/alertCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AlertItemRequestBuilder } from './item/alertItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface Alerts_v2RequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface Alerts_v2RequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: Alerts_v2RequestBuilderGetQueryParameters;
}
export interface Alerts_v2RequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the alerts_v2 property of the microsoft.graph.security entity.
 */
export class Alerts_v2RequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the alerts_v2 property of the microsoft.graph.security entity.
     * @param alertId The unique identifier of alert
     * @returns a AlertItemRequestBuilder
     */
    public byAlertId(alertId: string) : AlertItemRequestBuilder {
        if(!alertId) throw new Error("alertId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["alert%2Did"] = alertId
        return new AlertItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new Alerts_v2RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/alerts_v2{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of alert resources that have been created to track suspicious activities in an organization. This operation lets you filter and sort through alerts to create an informed cyber security response. It exposes a collection of alerts that were flagged in your network, within the time range you specified in your environment retention policy. The most recent alerts are displayed at the top of the list. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AlertCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-list-alerts_v2?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: Alerts_v2RequestBuilderGetRequestConfiguration | undefined) : Promise<AlertCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AlertCollectionResponse>(requestInfo, createAlertCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to alerts_v2 for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Alert
     */
    public post(body: Alert, requestConfiguration?: Alerts_v2RequestBuilderPostRequestConfiguration | undefined) : Promise<Alert | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Alert>(requestInfo, createAlertFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of alert resources that have been created to track suspicious activities in an organization. This operation lets you filter and sort through alerts to create an informed cyber security response. It exposes a collection of alerts that were flagged in your network, within the time range you specified in your environment retention policy. The most recent alerts are displayed at the top of the list. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: Alerts_v2RequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to alerts_v2 for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Alert, requestConfiguration?: Alerts_v2RequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAlert);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a alerts_v2RequestBuilder
     */
    public withUrl(rawUrl: string) : Alerts_v2RequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new Alerts_v2RequestBuilder(rawUrl, this.requestAdapter);
    };
}
