import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { type WhoisRecordCollectionResponse } from '../../../models/security/';
import { createWhoisRecordFromDiscriminatorValue, deserializeIntoWhoisRecord, serializeWhoisRecord, type WhoisRecord } from '../../../models/security/whoisRecord';
import { createWhoisRecordCollectionResponseFromDiscriminatorValue } from '../../../models/security/whoisRecordCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WhoisRecordItemRequestBuilder } from './item/whoisRecordItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WhoisRecordsRequestBuilderGetQueryParameters {
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
export interface WhoisRecordsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WhoisRecordsRequestBuilderGetQueryParameters;
}
export interface WhoisRecordsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the whoisRecords property of the microsoft.graph.security.threatIntelligence entity.
 */
export class WhoisRecordsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the whoisRecords property of the microsoft.graph.security.threatIntelligence entity.
     * @param whoisRecordId The unique identifier of whoisRecord
     * @returns a WhoisRecordItemRequestBuilder
     */
    public byWhoisRecordId(whoisRecordId: string) : WhoisRecordItemRequestBuilder {
        if(!whoisRecordId) throw new Error("whoisRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["whoisRecord%2Did"] = whoisRecordId
        return new WhoisRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WhoisRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/whoisRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of whoisRecord objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WhoisRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-whoisrecord-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WhoisRecordsRequestBuilderGetRequestConfiguration | undefined) : Promise<WhoisRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WhoisRecordCollectionResponse>(requestInfo, createWhoisRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to whoisRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WhoisRecord
     */
    public post(body: WhoisRecord, requestConfiguration?: WhoisRecordsRequestBuilderPostRequestConfiguration | undefined) : Promise<WhoisRecord | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WhoisRecord>(requestInfo, createWhoisRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of whoisRecord objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WhoisRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to whoisRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WhoisRecord, requestConfiguration?: WhoisRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWhoisRecord);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a whoisRecordsRequestBuilder
     */
    public withUrl(rawUrl: string) : WhoisRecordsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WhoisRecordsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
