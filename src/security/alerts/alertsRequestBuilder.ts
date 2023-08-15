import {AlertCollectionResponse} from '../../models/';
import type {Alert} from '../../models/alert';
import {createAlertCollectionResponseFromDiscriminatorValue} from '../../models/createAlertCollectionResponseFromDiscriminatorValue';
import {createAlertFromDiscriminatorValue} from '../../models/createAlertFromDiscriminatorValue';
import {deserializeIntoAlert} from '../../models/deserializeIntoAlert';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAlert} from '../../models/serializeAlert';
import {AlertsRequestBuilderGetRequestConfiguration} from './alertsRequestBuilderGetRequestConfiguration';
import {AlertsRequestBuilderPostRequestConfiguration} from './alertsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AlertItemRequestBuilder} from './item/alertItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alerts property of the microsoft.graph.security entity.
 */
export class AlertsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the alerts property of the microsoft.graph.security entity.
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
     * Instantiates a new AlertsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/alerts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of alert objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AlertCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/alert-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AlertsRequestBuilderGetRequestConfiguration | undefined) : Promise<AlertCollectionResponse | undefined> {
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
     * Create new navigation property to alerts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Alert
     */
    public post(body: Alert, requestConfiguration?: AlertsRequestBuilderPostRequestConfiguration | undefined) : Promise<Alert | undefined> {
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
     * Retrieve a list of alert objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AlertsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to alerts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Alert, requestConfiguration?: AlertsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
}
