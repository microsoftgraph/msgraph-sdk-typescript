import {Message} from '../../../message';
import {AttachmentsRequestBuilder} from '../attachments/attachmentsRequestBuilder';
import {AttachmentRequestBuilder} from '../attachments/item/attachmentRequestBuilder';
import {ContentRequestBuilder} from '../content/contentRequestBuilder';
import {ExtensionsRequestBuilder} from '../extensions/extensionsRequestBuilder';
import {ExtensionRequestBuilder} from '../extensions/item/extensionRequestBuilder';
import {Microsoft.graph.calendarSharingMessageRequestBuilder} from '../microsoft/graph/calendarSharingMessage/microsoft.graph.calendarSharingMessageRequestBuilder';
import {Microsoft.graph.copyRequestBuilder} from '../microsoft/graph/copy/microsoft.graph.copyRequestBuilder';
import {Microsoft.graph.createForwardRequestBuilder} from '../microsoft/graph/createForward/microsoft.graph.createForwardRequestBuilder';
import {Microsoft.graph.createReplyRequestBuilder} from '../microsoft/graph/createReply/microsoft.graph.createReplyRequestBuilder';
import {Microsoft.graph.createReplyAllRequestBuilder} from '../microsoft/graph/createReplyAll/microsoft.graph.createReplyAllRequestBuilder';
import {Microsoft.graph.forwardRequestBuilder} from '../microsoft/graph/forward/microsoft.graph.forwardRequestBuilder';
import {Microsoft.graph.moveRequestBuilder} from '../microsoft/graph/move/microsoft.graph.moveRequestBuilder';
import {Microsoft.graph.replyRequestBuilder} from '../microsoft/graph/reply/microsoft.graph.replyRequestBuilder';
import {Microsoft.graph.replyAllRequestBuilder} from '../microsoft/graph/replyAll/microsoft.graph.replyAllRequestBuilder';
import {Microsoft.graph.sendRequestBuilder} from '../microsoft/graph/send/microsoft.graph.sendRequestBuilder';
import {MultiValueLegacyExtendedPropertyRequestBuilder} from '../multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from '../multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueLegacyExtendedPropertyRequestBuilder} from '../singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from '../singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/messages/{message-id}  */
export class MessageRequestBuilder {
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.calendarSharingMessage(): Microsoft.graph.calendarSharingMessageRequestBuilder {
        return new Microsoft.graph.calendarSharingMessageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.copy(): Microsoft.graph.copyRequestBuilder {
        return new Microsoft.graph.copyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.createForward(): Microsoft.graph.createForwardRequestBuilder {
        return new Microsoft.graph.createForwardRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.createReply(): Microsoft.graph.createReplyRequestBuilder {
        return new Microsoft.graph.createReplyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.createReplyAll(): Microsoft.graph.createReplyAllRequestBuilder {
        return new Microsoft.graph.createReplyAllRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.forward(): Microsoft.graph.forwardRequestBuilder {
        return new Microsoft.graph.forwardRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.move(): Microsoft.graph.moveRequestBuilder {
        return new Microsoft.graph.moveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.reply(): Microsoft.graph.replyRequestBuilder {
        return new Microsoft.graph.replyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.replyAll(): Microsoft.graph.replyAllRequestBuilder {
        return new Microsoft.graph.replyAllRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.send(): Microsoft.graph.sendRequestBuilder {
        return new Microsoft.graph.sendRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.users.messages.attachments collection
     * @param id Unique identifier of the item
     * @returns a AttachmentRequestBuilder
     */
    public attachmentsById(id: String) : AttachmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AttachmentRequestBuilder(this.currentPath + this.pathSegment + "/attachments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new MessageRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Message | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.messages.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
     */
    public extensionsById(id: String) : ExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Message
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Message | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Message>(requestInfo, Message, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.messages.multiValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: String) : MultiValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MultiValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/multiValueExtendedProperties/" + id, this.httpCore, false);
    };
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Message | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.messages.singleValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: String) : SingleValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SingleValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/singleValueExtendedProperties/" + id, this.httpCore, false);
    };
}
