import {MailFolder} from '../../../mailFolder';
import {ChildFoldersRequestBuilder} from '../childFolders/childFoldersRequestBuilder';
import {MessageRuleRequestBuilder} from '../messageRules/item/messageRuleRequestBuilder';
import {MessageRulesRequestBuilder} from '../messageRules/messageRulesRequestBuilder';
import {MessageRequestBuilder} from '../messages/item/messageRequestBuilder';
import {MessagesRequestBuilder} from '../messages/messagesRequestBuilder';
import {Microsoft.graph.copyRequestBuilder} from '../microsoft/graph/copy/microsoft.graph.copyRequestBuilder';
import {Microsoft.graph.moveRequestBuilder} from '../microsoft/graph/move/microsoft.graph.moveRequestBuilder';
import {MultiValueLegacyExtendedPropertyRequestBuilder} from '../multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from '../multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueLegacyExtendedPropertyRequestBuilder} from '../singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from '../singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}  */
export class MailFolderRequestBuilder {
    public get childFolders(): ChildFoldersRequestBuilder {
        return new ChildFoldersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get messageRules(): MessageRulesRequestBuilder {
        return new MessageRulesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.copy(): Microsoft.graph.copyRequestBuilder {
        return new Microsoft.graph.copyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.move(): Microsoft.graph.moveRequestBuilder {
        return new Microsoft.graph.moveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
     * Gets an item from the MicrosoftGraph.users.mailFolders.childFolders collection
     * @param id Unique identifier of the item
     * @returns a MailFolderRequestBuilder
     */
    public childFoldersById(id: String) : MailFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MailFolderRequestBuilder(this.currentPath + this.pathSegment + "/childFolders/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new MailFolderRequestBuilder and sets the default values.
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
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: MailFolder | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MailFolder | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<MailFolder>(requestInfo, MailFolder, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.mailFolders.messageRules collection
     * @param id Unique identifier of the item
     * @returns a MessageRuleRequestBuilder
     */
    public messageRulesById(id: String) : MessageRuleRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MessageRuleRequestBuilder(this.currentPath + this.pathSegment + "/messageRules/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.mailFolders.messages collection
     * @param id Unique identifier of the item
     * @returns a MessageRequestBuilder
     */
    public messagesById(id: String) : MessageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MessageRequestBuilder(this.currentPath + this.pathSegment + "/messages/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.mailFolders.multiValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: String) : MultiValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MultiValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/multiValueExtendedProperties/" + id, this.httpCore, false);
    };
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: MailFolder | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.mailFolders.singleValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: String) : SingleValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SingleValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/singleValueExtendedProperties/" + id, this.httpCore, false);
    };
}
