import {Chat} from '../../../../models/';
import {createChatFromDiscriminatorValue} from '../../../../models/createChatFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ChatItemRequestBuilderDeleteRequestConfiguration} from './chatItemRequestBuilderDeleteRequestConfiguration';
import {ChatItemRequestBuilderGetRequestConfiguration} from './chatItemRequestBuilderGetRequestConfiguration';
import {ChatItemRequestBuilderPatchRequestConfiguration} from './chatItemRequestBuilderPatchRequestConfiguration';
import {HideForUserRequestBuilder} from './hideForUser/hideForUserRequestBuilder';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {TeamsAppInstallationItemRequestBuilder} from './installedApps/item/teamsAppInstallationItemRequestBuilder';
import {LastMessagePreviewRequestBuilder} from './lastMessagePreview/lastMessagePreviewRequestBuilder';
import {MarkChatReadForUserRequestBuilder} from './markChatReadForUser/markChatReadForUserRequestBuilder';
import {MarkChatUnreadForUserRequestBuilder} from './markChatUnreadForUser/markChatUnreadForUserRequestBuilder';
import {ConversationMemberItemRequestBuilder} from './members/item/conversationMemberItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {ChatMessageItemRequestBuilder} from './messages/item/chatMessageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {PinnedChatMessageInfoItemRequestBuilder} from './pinnedMessages/item/pinnedChatMessageInfoItemRequestBuilder';
import {PinnedMessagesRequestBuilder} from './pinnedMessages/pinnedMessagesRequestBuilder';
import {SendActivityNotificationRequestBuilder} from './sendActivityNotification/sendActivityNotificationRequestBuilder';
import {TeamsTabItemRequestBuilder} from './tabs/item/teamsTabItemRequestBuilder';
import {TabsRequestBuilder} from './tabs/tabsRequestBuilder';
import {UnhideForUserRequestBuilder} from './unhideForUser/unhideForUserRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the chats property of the microsoft.graph.user entity. */
export class ChatItemRequestBuilder {
    /** Provides operations to call the hideForUser method. */
    public get hideForUser(): HideForUserRequestBuilder {
        return new HideForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the installedApps property of the microsoft.graph.chat entity. */
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity. */
    public get lastMessagePreview(): LastMessagePreviewRequestBuilder {
        return new LastMessagePreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the markChatReadForUser method. */
    public get markChatReadForUser(): MarkChatReadForUserRequestBuilder {
        return new MarkChatReadForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the markChatUnreadForUser method. */
    public get markChatUnreadForUser(): MarkChatUnreadForUserRequestBuilder {
        return new MarkChatUnreadForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.chat entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messages property of the microsoft.graph.chat entity. */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity. */
    public get pinnedMessages(): PinnedMessagesRequestBuilder {
        return new PinnedMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the sendActivityNotification method. */
    public get sendActivityNotification(): SendActivityNotificationRequestBuilder {
        return new SendActivityNotificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tabs property of the microsoft.graph.chat entity. */
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unhideForUser method. */
    public get unhideForUser(): UnhideForUserRequestBuilder {
        return new UnhideForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ChatItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/chats/{chat%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property chats for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ChatItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get chats from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ChatItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property chats in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Chat | undefined, requestConfiguration?: ChatItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property chats for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ChatItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get chats from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Chat
     */
    public get(requestConfiguration?: ChatItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Chat | undefined> {
        const requestInfo = this.createGetRequestInformation(
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
     * Update the navigation property chats in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Chat
     */
    public patch(body: Chat | undefined, requestConfiguration?: ChatItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Chat | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
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
}
