import { createSearchEntityFromDiscriminatorValue } from '../models/createSearchEntityFromDiscriminatorValue';
import { deserializeIntoSearchEntity } from '../models/deserializeIntoSearchEntity';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { type SearchEntity } from '../models/searchEntity';
import { serializeSearchEntity } from '../models/serializeSearchEntity';
import { QueryRequestBuilder } from './query/queryRequestBuilder';
import { type SearchRequestBuilderGetRequestConfiguration } from './searchRequestBuilderGetRequestConfiguration';
import { type SearchRequestBuilderPatchRequestConfiguration } from './searchRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the searchEntity singleton.
 */
export class SearchRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the query method.
     */
    public get query(): QueryRequestBuilder {
        return new QueryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SearchRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/search{?%24select,%24expand}");
    };
    /**
     * Get search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SearchEntity
     */
    public get(requestConfiguration?: SearchRequestBuilderGetRequestConfiguration | undefined) : Promise<SearchEntity | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SearchEntity>(requestInfo, createSearchEntityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update search
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SearchEntity
     */
    public patch(body: SearchEntity, requestConfiguration?: SearchRequestBuilderPatchRequestConfiguration | undefined) : Promise<SearchEntity | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SearchEntity>(requestInfo, createSearchEntityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SearchRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update search
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SearchEntity, requestConfiguration?: SearchRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSearchEntity);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a searchRequestBuilder
     */
    public withUrl(rawUrl: string) : SearchRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SearchRequestBuilder(rawUrl, this.requestAdapter);
    };
}
