import type {ConversationThread} from '../../../../../../models/conversationThread';
import {createConversationThreadFromDiscriminatorValue} from '../../../../../../models/createConversationThreadFromDiscriminatorValue';
import {deserializeIntoConversationThread} from '../../../../../../models/deserializeIntoConversationThread';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeConversationThread} from '../../../../../../models/serializeConversationThread';
import {ConversationThreadItemRequestBuilderDeleteRequestConfiguration} from './conversationThreadItemRequestBuilderDeleteRequestConfiguration';
import {ConversationThreadItemRequestBuilderGetRequestConfiguration} from './conversationThreadItemRequestBuilderGetRequestConfiguration';
import {ConversationThreadItemRequestBuilderPatchRequestConfiguration} from './conversationThreadItemRequestBuilderPatchRequestConfiguration';
import {PostsRequestBuilder} from './posts/postsRequestBuilder';
import {ReplyRequestBuilder} from './reply/replyRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the threads property of the microsoft.graph.conversation entity.
 */
export class ConversationThreadItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the posts property of the microsoft.graph.conversationThread entity.
     */
    public get posts(): PostsRequestBuilder {
        return new PostsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the reply method.
     */
    public get reply(): ReplyRequestBuilder {
        return new ReplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ConversationThreadItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/conversations/{conversation%2Did}/threads/{conversationThread%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property threads for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ConversationThreadItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationThread
     */
    public get(requestConfiguration?: ConversationThreadItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ConversationThread | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationThread>(requestInfo, createConversationThreadFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property threads in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationThread
     */
    public patch(body: ConversationThread, requestConfiguration?: ConversationThreadItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ConversationThread | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationThread>(requestInfo, createConversationThreadFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property threads for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ConversationThreadItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConversationThreadItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property threads in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ConversationThread, requestConfiguration?: ConversationThreadItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConversationThread);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ConversationThreadItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ConversationThreadItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ConversationThreadItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
