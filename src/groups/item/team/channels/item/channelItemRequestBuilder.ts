import {Channel} from '../../../../../models/';
import {createChannelFromDiscriminatorValue} from '../../../../../models/createChannelFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ChannelItemRequestBuilderDeleteRequestConfiguration} from './channelItemRequestBuilderDeleteRequestConfiguration';
import {ChannelItemRequestBuilderGetRequestConfiguration} from './channelItemRequestBuilderGetRequestConfiguration';
import {ChannelItemRequestBuilderPatchRequestConfiguration} from './channelItemRequestBuilderPatchRequestConfiguration';
import {CompleteMigrationRequestBuilder} from './completeMigration/completeMigrationRequestBuilder';
import {DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder} from './doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalName/doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder';
import {FilesFolderRequestBuilder} from './filesFolder/filesFolderRequestBuilder';
import {ConversationMemberItemRequestBuilder} from './members/item/conversationMemberItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {ChatMessageItemRequestBuilder} from './messages/item/chatMessageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {ProvisionEmailRequestBuilder} from './provisionEmail/provisionEmailRequestBuilder';
import {RemoveEmailRequestBuilder} from './removeEmail/removeEmailRequestBuilder';
import {SharedWithChannelTeamInfoItemRequestBuilder} from './sharedWithTeams/item/sharedWithChannelTeamInfoItemRequestBuilder';
import {SharedWithTeamsRequestBuilder} from './sharedWithTeams/sharedWithTeamsRequestBuilder';
import {TeamsTabItemRequestBuilder} from './tabs/item/teamsTabItemRequestBuilder';
import {TabsRequestBuilder} from './tabs/tabsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the channels property of the microsoft.graph.team entity. */
export class ChannelItemRequestBuilder {
    /** Provides operations to call the completeMigration method. */
    public get completeMigration(): CompleteMigrationRequestBuilder {
        return new CompleteMigrationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the filesFolder property of the microsoft.graph.channel entity. */
    public get filesFolder(): FilesFolderRequestBuilder {
        return new FilesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.channel entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messages property of the microsoft.graph.channel entity. */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to call the provisionEmail method. */
    public get provisionEmail(): ProvisionEmailRequestBuilder {
        return new ProvisionEmailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeEmail method. */
    public get removeEmail(): RemoveEmailRequestBuilder {
        return new RemoveEmailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity. */
    public get sharedWithTeams(): SharedWithTeamsRequestBuilder {
        return new SharedWithTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tabs property of the microsoft.graph.channel entity. */
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new ChannelItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/team/channels/{channel%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property channels for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ChannelItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection of channels and messages associated with the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ChannelItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property channels in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Channel | undefined, requestConfiguration?: ChannelItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Delete navigation property channels for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ChannelItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to call the doesUserHaveAccess method.
     * @returns a doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder
     */
    public doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalName() : DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder {
        return new DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * The collection of channels and messages associated with the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Channel
     */
    public get(requestConfiguration?: ChannelItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Channel | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Channel>(requestInfo, createChannelFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the members property of the microsoft.graph.channel entity.
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
     * Provides operations to manage the messages property of the microsoft.graph.channel entity.
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
     * Update the navigation property channels in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Channel
     */
    public patch(body: Channel | undefined, requestConfiguration?: ChannelItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Channel | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Channel>(requestInfo, createChannelFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
     * @param id Unique identifier of the item
     * @returns a SharedWithChannelTeamInfoItemRequestBuilder
     */
    public sharedWithTeamsById(id: string) : SharedWithChannelTeamInfoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedWithChannelTeamInfo%2Did"] = id
        return new SharedWithChannelTeamInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
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
