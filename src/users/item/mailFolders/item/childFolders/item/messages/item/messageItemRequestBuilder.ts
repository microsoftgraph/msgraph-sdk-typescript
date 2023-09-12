import { createMessageFromDiscriminatorValue } from '../../../../../../../../models/createMessageFromDiscriminatorValue';
import { deserializeIntoMessage } from '../../../../../../../../models/deserializeIntoMessage';
import { type Message } from '../../../../../../../../models/message';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeMessage } from '../../../../../../../../models/serializeMessage';
import { AttachmentsRequestBuilder } from './attachments/attachmentsRequestBuilder';
import { CopyRequestBuilder } from './copy/copyRequestBuilder';
import { CreateForwardRequestBuilder } from './createForward/createForwardRequestBuilder';
import { CreateReplyRequestBuilder } from './createReply/createReplyRequestBuilder';
import { CreateReplyAllRequestBuilder } from './createReplyAll/createReplyAllRequestBuilder';
import { ExtensionsRequestBuilder } from './extensions/extensionsRequestBuilder';
import { ForwardRequestBuilder } from './forward/forwardRequestBuilder';
import { type MessageItemRequestBuilderDeleteRequestConfiguration } from './messageItemRequestBuilderDeleteRequestConfiguration';
import { type MessageItemRequestBuilderGetRequestConfiguration } from './messageItemRequestBuilderGetRequestConfiguration';
import { type MessageItemRequestBuilderPatchRequestConfiguration } from './messageItemRequestBuilderPatchRequestConfiguration';
import { MoveRequestBuilder } from './move/moveRequestBuilder';
import { ReplyRequestBuilder } from './reply/replyRequestBuilder';
import { ReplyAllRequestBuilder } from './replyAll/replyAllRequestBuilder';
import { SendRequestBuilder } from './send/sendRequestBuilder';
import { ContentRequestBuilder } from './value/contentRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the messages property of the microsoft.graph.mailFolder entity.
 */
export class MessageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the attachments property of the microsoft.graph.message entity.
     */
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the user entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the copy method.
     */
    public get copy(): CopyRequestBuilder {
        return new CopyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createForward method.
     */
    public get createForward(): CreateForwardRequestBuilder {
        return new CreateForwardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createReply method.
     */
    public get createReply(): CreateReplyRequestBuilder {
        return new CreateReplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createReplyAll method.
     */
    public get createReplyAll(): CreateReplyAllRequestBuilder {
        return new CreateReplyAllRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.message entity.
     */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the forward method.
     */
    public get forward(): ForwardRequestBuilder {
        return new ForwardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the move method.
     */
    public get move(): MoveRequestBuilder {
        return new MoveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the reply method.
     */
    public get reply(): ReplyRequestBuilder {
        return new ReplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the replyAll method.
     */
    public get replyAll(): ReplyAllRequestBuilder {
        return new ReplyAllRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the send method.
     */
    public get send(): SendRequestBuilder {
        return new SendRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MessageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property messages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: MessageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     */
    public get(requestConfiguration?: MessageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Message | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Message>(requestInfo, createMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property messages in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     */
    public patch(body: Message, requestConfiguration?: MessageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Message | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Message>(requestInfo, createMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property messages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MessageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MessageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property messages in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Message, requestConfiguration?: MessageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMessage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a MessageItemRequestBuilder
     */
    public withUrl(rawUrl: string) : MessageItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MessageItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
