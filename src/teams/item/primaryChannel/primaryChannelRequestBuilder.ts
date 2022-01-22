import {Channel} from '../../../models/microsoft/graph/channel';
import {CompleteMigrationRequestBuilder} from './completeMigration/completeMigrationRequestBuilder';
import {FilesFolderRequestBuilder} from './filesFolder/filesFolderRequestBuilder';
import {ConversationMemberRequestBuilder} from './members/item/conversationMemberRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {ChatMessageRequestBuilder} from './messages/item/chatMessageRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {ProvisionEmailRequestBuilder} from './provisionEmail/provisionEmailRequestBuilder';
import {RemoveEmailRequestBuilder} from './removeEmail/removeEmailRequestBuilder';
import {TeamsTabRequestBuilder} from './tabs/item/teamsTabRequestBuilder';
import {TabsRequestBuilder} from './tabs/tabsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /teams/{team-id}/primaryChannel  */
export class PrimaryChannelRequestBuilder {
    public get completeMigration(): CompleteMigrationRequestBuilder {
        return new CompleteMigrationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get filesFolder(): FilesFolderRequestBuilder {
        return new FilesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    public get provisionEmail(): ProvisionEmailRequestBuilder {
        return new ProvisionEmailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get removeEmail(): RemoveEmailRequestBuilder {
        return new RemoveEmailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PrimaryChannelRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/teams/{team_id}/primaryChannel{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The general channel for the team.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The general channel for the team.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The general channel for the team.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Channel | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The general channel for the team.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The general channel for the team.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Channel
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Channel | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Channel>(requestInfo, Channel, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.teams.item.primaryChannel.members.item collection
     * @param id Unique identifier of the item
     * @returns a conversationMemberRequestBuilder
     */
    public membersById(id: string) : ConversationMemberRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("conversationMember_id", id);
        return new ConversationMemberRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.teams.item.primaryChannel.messages.item collection
     * @param id Unique identifier of the item
     * @returns a chatMessageRequestBuilder
     */
    public messagesById(id: string) : ChatMessageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("chatMessage_id", id);
        return new ChatMessageRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The general channel for the team.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Channel | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.teams.item.primaryChannel.tabs.item collection
     * @param id Unique identifier of the item
     * @returns a teamsTabRequestBuilder
     */
    public tabsById(id: string) : TeamsTabRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("teamsTab_id", id);
        return new TeamsTabRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
