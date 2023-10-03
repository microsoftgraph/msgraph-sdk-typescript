import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createGetRecentNotebooksWithIncludePersonalNotebooksGetResponseFromDiscriminatorValue } from './getRecentNotebooksWithIncludePersonalNotebooksGetResponse';
import { type GetRecentNotebooksWithIncludePersonalNotebooksGetResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the getRecentNotebooks method.
 */
export class GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder and sets the default values.
     * @param includePersonalNotebooks Usage: includePersonalNotebooks={includePersonalNotebooks}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, includePersonalNotebooks?: boolean | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onenote/notebooks/getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks}){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["includePersonalNotebooks"] = includePersonalNotebooks
    };
    /**
     * Invoke function getRecentNotebooks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetRecentNotebooksWithIncludePersonalNotebooksGetResponse
     */
    public get(requestConfiguration?: GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration | undefined) : Promise<GetRecentNotebooksWithIncludePersonalNotebooksGetResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetRecentNotebooksWithIncludePersonalNotebooksGetResponse>(requestInfo, createGetRecentNotebooksWithIncludePersonalNotebooksGetResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getRecentNotebooks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder
     */
    public withUrl(rawUrl: string) : GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder(rawUrl, this.requestAdapter);
    };
}
