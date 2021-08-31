import {Channel} from '../../../channel';
import {CompleteMigrationRequestBuilder} from '../completeMigration/completeMigrationRequestBuilder';
import {FilesFolderRequestBuilder} from '../filesFolder/filesFolderRequestBuilder';
import {ConversationMemberRequestBuilder} from '../members/item/conversationMemberRequestBuilder';
import {MembersRequestBuilder} from '../members/membersRequestBuilder';
import {ChatMessageRequestBuilder} from '../messages/item/chatMessageRequestBuilder';
import {MessagesRequestBuilder} from '../messages/messagesRequestBuilder';
import {TeamsTabRequestBuilder} from '../tabs/item/teamsTabRequestBuilder';
import {TabsRequestBuilder} from '../tabs/tabsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /teams/{team-id}/channels/{channel-id}  */
export class ChannelRequestBuilder {
    public get completeMigration(): CompleteMigrationRequestBuilder {
        return new CompleteMigrationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get filesFolder(): FilesFolderRequestBuilder {
        return new FilesFolderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new ChannelRequestBuilder and sets the default values.
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
     * The collection of channels & messages associated with the team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The collection of channels & messages associated with the team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The collection of channels & messages associated with the team.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Channel | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The collection of channels & messages associated with the team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The collection of channels & messages associated with the team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Channel
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Channel | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Channel>(requestInfo, Channel, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.channels.members collection
     * @param id Unique identifier of the item
     * @returns a ConversationMemberRequestBuilder
     */
    public membersById(id: String) : ConversationMemberRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConversationMemberRequestBuilder(this.currentPath + this.pathSegment + "/members/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.channels.messages collection
     * @param id Unique identifier of the item
     * @returns a ChatMessageRequestBuilder
     */
    public messagesById(id: String) : ChatMessageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ChatMessageRequestBuilder(this.currentPath + this.pathSegment + "/messages/" + id, this.httpCore, false);
    };
    /**
     * The collection of channels & messages associated with the team.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Channel | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.channels.tabs collection
     * @param id Unique identifier of the item
     * @returns a TeamsTabRequestBuilder
     */
    public tabsById(id: String) : TeamsTabRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamsTabRequestBuilder(this.currentPath + this.pathSegment + "/tabs/" + id, this.httpCore, false);
    };
}
