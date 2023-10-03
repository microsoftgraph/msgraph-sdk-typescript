import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { type WhoisHistoryRecordCollectionResponse } from '../../../../../models/security/';
import { createWhoisHistoryRecordCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/whoisHistoryRecordCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WhoisHistoryRecordItemRequestBuilder } from './item/whoisHistoryRecordItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface HistoryRequestBuilderGetQueryParameters {
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
export interface HistoryRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HistoryRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the history property of the microsoft.graph.security.whoisRecord entity.
 */
export class HistoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the history property of the microsoft.graph.security.whoisRecord entity.
     * @param whoisHistoryRecordId The unique identifier of whoisHistoryRecord
     * @returns a WhoisHistoryRecordItemRequestBuilder
     */
    public byWhoisHistoryRecordId(whoisHistoryRecordId: string) : WhoisHistoryRecordItemRequestBuilder {
        if(!whoisHistoryRecordId) throw new Error("whoisHistoryRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["whoisHistoryRecord%2Did"] = whoisHistoryRecordId
        return new WhoisHistoryRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HistoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/whoisRecords/{whoisRecord%2Did}/history{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the history for a whoisRecord, as represented by a collection of whoisHistoryRecord resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WhoisHistoryRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-whoisrecord-list-history?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HistoryRequestBuilderGetRequestConfiguration | undefined) : Promise<WhoisHistoryRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WhoisHistoryRecordCollectionResponse>(requestInfo, createWhoisHistoryRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the history for a whoisRecord, as represented by a collection of whoisHistoryRecord resources.
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a historyRequestBuilder
     */
    public withUrl(rawUrl: string) : HistoryRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HistoryRequestBuilder(rawUrl, this.requestAdapter);
    };
}
