import type {Chat} from '../../../models/chat';
import {createChatFromDiscriminatorValue} from '../../../models/createChatFromDiscriminatorValue';
import {deserializeIntoChat} from '../../../models/deserializeIntoChat';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeChat} from '../../../models/serializeChat';
import {ChatItemRequestBuilderDeleteRequestConfiguration} from './chatItemRequestBuilderDeleteRequestConfiguration';
import {ChatItemRequestBuilderGetRequestConfiguration} from './chatItemRequestBuilderGetRequestConfiguration';
import {ChatItemRequestBuilderPatchRequestConfiguration} from './chatItemRequestBuilderPatchRequestConfiguration';
import {HideForUserRequestBuilder} from './hideForUser/hideForUserRequestBuilder';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {LastMessagePreviewRequestBuilder} from './lastMessagePreview/lastMessagePreviewRequestBuilder';
import {MarkChatReadForUserRequestBuilder} from './markChatReadForUser/markChatReadForUserRequestBuilder';
import {MarkChatUnreadForUserRequestBuilder} from './markChatUnreadForUser/markChatUnreadForUserRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PinnedMessagesRequestBuilder} from './pinnedMessages/pinnedMessagesRequestBuilder';
import {SendActivityNotificationRequestBuilder} from './sendActivityNotification/sendActivityNotificationRequestBuilder';
import {TabsRequestBuilder} from './tabs/tabsRequestBuilder';
import {UnhideForUserRequestBuilder} from './unhideForUser/unhideForUserRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the chats property of the microsoft.graph.user entity.
 */
export class ChatItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the hideForUser method.
     */
    public get hideForUser(): HideForUserRequestBuilder {
        return new HideForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
     */
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity.
     */
    public get lastMessagePreview(): LastMessagePreviewRequestBuilder {
        return new LastMessagePreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the markChatReadForUser method.
     */
    public get markChatReadForUser(): MarkChatReadForUserRequestBuilder {
        return new MarkChatReadForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the markChatUnreadForUser method.
     */
    public get markChatUnreadForUser(): MarkChatUnreadForUserRequestBuilder {
        return new MarkChatUnreadForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.chat entity.
     */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messages property of the microsoft.graph.chat entity.
     */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the permissionGrants property of the microsoft.graph.chat entity.
     */
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
     */
    public get pinnedMessages(): PinnedMessagesRequestBuilder {
        return new PinnedMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sendActivityNotification method.
     */
    public get sendActivityNotification(): SendActivityNotificationRequestBuilder {
        return new SendActivityNotificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
     */
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unhideForUser method.
     */
    public get unhideForUser(): UnhideForUserRequestBuilder {
        return new UnhideForUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ChatItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property chats for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ChatItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Chat
     * @see {@link https://learn.microsoft.com/graph/api/chat-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChatItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Chat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Chat>(requestInfo, createChatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property chats in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Chat
     */
    public patch(body: Chat | undefined, requestConfiguration?: ChatItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Chat | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Chat>(requestInfo, createChatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property chats for me
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
     * Update the navigation property chats in me
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeChat);
        return requestInfo;
    };
}
