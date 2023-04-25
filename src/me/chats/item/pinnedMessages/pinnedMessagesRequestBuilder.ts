import {PinnedChatMessageInfo, PinnedChatMessageInfoCollectionResponse} from '../../../../models/';
import {createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue} from '../../../../models/createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue';
import {createPinnedChatMessageInfoFromDiscriminatorValue} from '../../../../models/createPinnedChatMessageInfoFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PinnedChatMessageInfoItemRequestBuilder} from './item/pinnedChatMessageInfoItemRequestBuilder';
import {PinnedMessagesRequestBuilderGetRequestConfiguration} from './pinnedMessagesRequestBuilderGetRequestConfiguration';
import {PinnedMessagesRequestBuilderPostRequestConfiguration} from './pinnedMessagesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
 */
export class PinnedMessagesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
     * @param pinnedChatMessageInfoId Unique identifier of the item
     * @returns a PinnedChatMessageInfoItemRequestBuilder
     */
    public byPinnedChatMessageInfoId(pinnedChatMessageInfoId: string) : PinnedChatMessageInfoItemRequestBuilder {
        if(!pinnedChatMessageInfoId) throw new Error("pinnedChatMessageInfoId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["pinnedChatMessageInfo%2Did"] = pinnedChatMessageInfoId
        return new PinnedChatMessageInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PinnedMessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/pinnedMessages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A collection of all the pinned messages in the chat. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PinnedChatMessageInfoCollectionResponse
     */
    public get(requestConfiguration?: PinnedMessagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PinnedChatMessageInfoCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PinnedChatMessageInfoCollectionResponse>(requestInfo, createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to pinnedMessages for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PinnedChatMessageInfo
     */
    public post(body: PinnedChatMessageInfo | undefined, requestConfiguration?: PinnedMessagesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PinnedChatMessageInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PinnedChatMessageInfo>(requestInfo, createPinnedChatMessageInfoFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A collection of all the pinned messages in the chat. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PinnedMessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to pinnedMessages for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PinnedChatMessageInfo | undefined, requestConfiguration?: PinnedMessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
