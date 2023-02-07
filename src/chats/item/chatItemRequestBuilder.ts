import {Chat} from '../../models/';
import {createChatFromDiscriminatorValue} from '../../models/createChatFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ChatItemRequestBuilderDeleteRequestConfiguration} from './chatItemRequestBuilderDeleteRequestConfiguration';
import {ChatItemRequestBuilderGetRequestConfiguration} from './chatItemRequestBuilderGetRequestConfiguration';
import {ChatItemRequestBuilderPatchRequestConfiguration} from './chatItemRequestBuilderPatchRequestConfiguration';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {TeamsAppInstallationItemRequestBuilder} from './installedApps/item/teamsAppInstallationItemRequestBuilder';
import {LastMessagePreviewRequestBuilder} from './lastMessagePreview/lastMessagePreviewRequestBuilder';
import {ConversationMemberItemRequestBuilder} from './members/item/conversationMemberItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {ChatMessageItemRequestBuilder} from './messages/item/chatMessageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {MicrosoftGraphHideForUserRequestBuilder} from './microsoftGraphHideForUser/microsoftGraphHideForUserRequestBuilder';
import {MicrosoftGraphMarkChatReadForUserRequestBuilder} from './microsoftGraphMarkChatReadForUser/microsoftGraphMarkChatReadForUserRequestBuilder';
import {MicrosoftGraphMarkChatUnreadForUserRequestBuilder} from './microsoftGraphMarkChatUnreadForUser/microsoftGraphMarkChatUnreadForUserRequestBuilder';
import {MicrosoftGraphSendActivityNotificationRequestBuilder} from './microsoftGraphSendActivityNotification/microsoftGraphSendActivityNotificationRequestBuilder';
import {MicrosoftGraphUnhideForUserRequestBuilder} from './microsoftGraphUnhideForUser/microsoftGraphUnhideForUserRequestBuilder';
import {PinnedChatMessageInfoItemRequestBuilder} from './pinnedMessages/item/pinnedChatMessageInfoItemRequestBuilder';
import {PinnedMessagesRequestBuilder} from './pinnedMessages/pinnedMessagesRequestBuilder';
import {TeamsTabItemRequestBuilder} from './tabs/item/teamsTabItemRequestBuilder';
import {TabsRequestBuilder} from './tabs/tabsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of chat entities.
 */
export class ChatItemRequestBuilder {
    /** Provides operations to manage the installedApps property of the microsoft.graph.chat entity. */
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity. */
    public get lastMessagePreview(): LastMessagePreviewRequestBuilder {
        return new LastMessagePreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.chat entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messages property of the microsoft.graph.chat entity. */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hideForUser method. */
    public get microsoftGraphHideForUser(): MicrosoftGraphHideForUserRequestBuilder {
        return new MicrosoftGraphHideForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the markChatReadForUser method. */
    public get microsoftGraphMarkChatReadForUser(): MicrosoftGraphMarkChatReadForUserRequestBuilder {
        return new MicrosoftGraphMarkChatReadForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the markChatUnreadForUser method. */
    public get microsoftGraphMarkChatUnreadForUser(): MicrosoftGraphMarkChatUnreadForUserRequestBuilder {
        return new MicrosoftGraphMarkChatUnreadForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sendActivityNotification method. */
    public get microsoftGraphSendActivityNotification(): MicrosoftGraphSendActivityNotificationRequestBuilder {
        return new MicrosoftGraphSendActivityNotificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unhideForUser method. */
    public get microsoftGraphUnhideForUser(): MicrosoftGraphUnhideForUserRequestBuilder {
        return new MicrosoftGraphUnhideForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity. */
    public get pinnedMessages(): PinnedMessagesRequestBuilder {
        return new PinnedMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the tabs property of the microsoft.graph.chat entity. */
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new ChatItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/chats/{chat%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from chats
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ChatItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Chat
     * @see {@link https://docs.microsoft.com/graph/api/chat-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChatItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Chat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Chat>(requestInfo, createChatFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
     * @param id Unique identifier of the item
     * @returns a TeamsAppInstallationItemRequestBuilder
     */
    public installedAppsById(id: string) : TeamsAppInstallationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsAppInstallation%2Did"] = id
        return new TeamsAppInstallationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the members property of the microsoft.graph.chat entity.
     * @param id Unique identifier of the item
     * @returns a ConversationMemberItemRequestBuilder
     */
    public membersById(id: string) : ConversationMemberItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationMember%2Did"] = id
        return new ConversationMemberItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the messages property of the microsoft.graph.chat entity.
     * @param id Unique identifier of the item
     * @returns a ChatMessageItemRequestBuilder
     */
    public messagesById(id: string) : ChatMessageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chatMessage%2Did"] = id
        return new ChatMessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the properties of a chat object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Chat
     * @see {@link https://docs.microsoft.com/graph/api/chat-patch?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Chat | undefined, requestConfiguration?: ChatItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Chat | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Chat>(requestInfo, createChatFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
     * @param id Unique identifier of the item
     * @returns a PinnedChatMessageInfoItemRequestBuilder
     */
    public pinnedMessagesById(id: string) : PinnedChatMessageInfoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["pinnedChatMessageInfo%2Did"] = id
        return new PinnedChatMessageInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
     * @param id Unique identifier of the item
     * @returns a TeamsTabItemRequestBuilder
     */
    public tabsById(id: string) : TeamsTabItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsTab%2Did"] = id
        return new TeamsTabItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete entity from chats
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ChatItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChatItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a chat object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Chat | undefined, requestConfiguration?: ChatItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
