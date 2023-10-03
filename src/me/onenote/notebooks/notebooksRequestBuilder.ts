import { type NotebookCollectionResponse } from '../../../models/';
import { createNotebookFromDiscriminatorValue, deserializeIntoNotebook, serializeNotebook, type Notebook } from '../../../models/notebook';
import { createNotebookCollectionResponseFromDiscriminatorValue } from '../../../models/notebookCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GetNotebookFromWebUrlRequestBuilder } from './getNotebookFromWebUrl/getNotebookFromWebUrlRequestBuilder';
import { GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder } from './getRecentNotebooksWithIncludePersonalNotebooks/getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder';
import { NotebookItemRequestBuilder } from './item/notebookItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface NotebooksRequestBuilderGetQueryParameters {
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
export interface NotebooksRequestBuilderGetRequestConfiguration {
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
    queryParameters?: NotebooksRequestBuilderGetQueryParameters;
}
export interface NotebooksRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
 */
export class NotebooksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getNotebookFromWebUrl method.
     */
    public get getNotebookFromWebUrl(): GetNotebookFromWebUrlRequestBuilder {
        return new GetNotebookFromWebUrlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
     * @param notebookId The unique identifier of notebook
     * @returns a NotebookItemRequestBuilder
     */
    public byNotebookId(notebookId: string) : NotebookItemRequestBuilder {
        if(!notebookId) throw new Error("notebookId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notebook%2Did"] = notebookId
        return new NotebookItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NotebooksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/onenote/notebooks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of notebook objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NotebookCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/onenote-list-notebooks?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NotebooksRequestBuilderGetRequestConfiguration | undefined) : Promise<NotebookCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NotebookCollectionResponse>(requestInfo, createNotebookCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the getRecentNotebooks method.
     * @param includePersonalNotebooks Usage: includePersonalNotebooks={includePersonalNotebooks}
     * @returns a getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder
     */
    public getRecentNotebooksWithIncludePersonalNotebooks(includePersonalNotebooks: boolean | undefined) : GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder {
        if(!includePersonalNotebooks) throw new Error("includePersonalNotebooks cannot be undefined");
        return new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder(this.pathParameters, this.requestAdapter, includePersonalNotebooks);
    };
    /**
     * Create a new OneNote notebook. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Notebook
     * @see {@link https://learn.microsoft.com/graph/api/onenote-post-notebooks?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Notebook, requestConfiguration?: NotebooksRequestBuilderPostRequestConfiguration | undefined) : Promise<Notebook | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Notebook>(requestInfo, createNotebookFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of notebook objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NotebooksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new OneNote notebook. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Notebook, requestConfiguration?: NotebooksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeNotebook);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a notebooksRequestBuilder
     */
    public withUrl(rawUrl: string) : NotebooksRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new NotebooksRequestBuilder(rawUrl, this.requestAdapter);
    };
}
