import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createGetAllMessagesResponseFromDiscriminatorValue } from './getAllMessagesResponse';
import { type GetAllMessagesResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetAllMessagesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * The payment model for the API
     */
    model?: string;
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
export interface GetAllMessagesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetAllMessagesRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the getAllMessages method.
 */
export class GetAllMessagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetAllMessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/deletedTeams/{deletedTeam%2Did}/channels/getAllMessages(){?model*,%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
    };
    /**
     * Invoke function getAllMessages
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetAllMessagesResponse
     */
    public get(requestConfiguration?: GetAllMessagesRequestBuilderGetRequestConfiguration | undefined) : Promise<GetAllMessagesResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetAllMessagesResponse>(requestInfo, createGetAllMessagesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getAllMessages
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetAllMessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getAllMessagesRequestBuilder
     */
    public withUrl(rawUrl: string) : GetAllMessagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetAllMessagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
