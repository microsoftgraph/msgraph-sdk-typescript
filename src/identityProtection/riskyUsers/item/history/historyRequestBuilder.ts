import { type RiskyUserHistoryItemCollectionResponse } from '../../../../models/';
import { createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue } from '../../../../models/createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue';
import { createRiskyUserHistoryItemFromDiscriminatorValue } from '../../../../models/createRiskyUserHistoryItemFromDiscriminatorValue';
import { deserializeIntoRiskyUserHistoryItem } from '../../../../models/deserializeIntoRiskyUserHistoryItem';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type RiskyUserHistoryItem } from '../../../../models/riskyUserHistoryItem';
import { serializeRiskyUserHistoryItem } from '../../../../models/serializeRiskyUserHistoryItem';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type HistoryRequestBuilderGetRequestConfiguration } from './historyRequestBuilderGetRequestConfiguration';
import { type HistoryRequestBuilderPostRequestConfiguration } from './historyRequestBuilderPostRequestConfiguration';
import { RiskyUserHistoryItemItemRequestBuilder } from './item/riskyUserHistoryItemItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the history property of the microsoft.graph.riskyUser entity.
 */
export class HistoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the history property of the microsoft.graph.riskyUser entity.
     * @param riskyUserHistoryItemId The unique identifier of riskyUserHistoryItem
     * @returns a RiskyUserHistoryItemItemRequestBuilder
     */
    public byRiskyUserHistoryItemId(riskyUserHistoryItemId: string) : RiskyUserHistoryItemItemRequestBuilder {
        if(!riskyUserHistoryItemId) throw new Error("riskyUserHistoryItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskyUserHistoryItem%2Did"] = riskyUserHistoryItemId
        return new RiskyUserHistoryItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HistoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyUsers/{riskyUser%2Did}/history{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a riskyUserHistoryItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyUserHistoryItemCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/riskyuser-get-riskyuserhistoryitem?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HistoryRequestBuilderGetRequestConfiguration | undefined) : Promise<RiskyUserHistoryItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyUserHistoryItemCollectionResponse>(requestInfo, createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to history for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyUserHistoryItem
     */
    public post(body: RiskyUserHistoryItem, requestConfiguration?: HistoryRequestBuilderPostRequestConfiguration | undefined) : Promise<RiskyUserHistoryItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyUserHistoryItem>(requestInfo, createRiskyUserHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a riskyUserHistoryItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HistoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to history for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RiskyUserHistoryItem, requestConfiguration?: HistoryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRiskyUserHistoryItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a historyRequestBuilder
     */
    public withUrl(rawUrl: string) : HistoryRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HistoryRequestBuilder(rawUrl, this.requestAdapter);
    };
}
