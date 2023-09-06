import { type PostCollectionResponse } from '../../../../../models/';
import { createPostCollectionResponseFromDiscriminatorValue } from '../../../../../models/createPostCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PostItemRequestBuilder } from './item/postItemRequestBuilder';
import { type PostsRequestBuilderGetRequestConfiguration } from './postsRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the posts property of the microsoft.graph.conversationThread entity.
 */
export class PostsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the posts property of the microsoft.graph.conversationThread entity.
     * @param postId The unique identifier of post
     * @returns a PostItemRequestBuilder
     */
    public byPostId(postId: string) : PostItemRequestBuilder {
        if(!postId) throw new Error("postId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["post%2Did"] = postId
        return new PostItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PostsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/threads/{conversationThread%2Did}/posts{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the properties and relationships of a post in a specified thread. You can specify both the parent conversation and the thread, or, you can specify the thread without referencing the parent conversation. Since the post resource supports extensions, you can also use the GET operation to get custom properties and extension data in a post instance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PostCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/post-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PostsRequestBuilderGetRequestConfiguration | undefined) : Promise<PostCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PostCollectionResponse>(requestInfo, createPostCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the properties and relationships of a post in a specified thread. You can specify both the parent conversation and the thread, or, you can specify the thread without referencing the parent conversation. Since the post resource supports extensions, you can also use the GET operation to get custom properties and extension data in a post instance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PostsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a postsRequestBuilder
     */
    public withUrl(rawUrl: string) : PostsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PostsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
