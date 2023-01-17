import {Team} from '../../../../models/';
import {createTeamFromDiscriminatorValue} from '../../../../models/createTeamFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllChannelsRequestBuilder} from './allChannels/allChannelsRequestBuilder';
import {ChannelItemRequestBuilder as I067c06e22d9cf3520a2fd897f6a402f420b68b5a8d7c4995c9a008ee24498b10} from './allChannels/item/channelItemRequestBuilder';
import {ArchiveRequestBuilder} from './archive/archiveRequestBuilder';
import {ChannelsRequestBuilder} from './channels/channelsRequestBuilder';
import {ChannelItemRequestBuilder as Ic289479f4fde5fafb16aee57f7567b1d7596179fc5ddc78276431e5c93a50878} from './channels/item/channelItemRequestBuilder';
import {CloneRequestBuilder} from './clone/cloneRequestBuilder';
import {CompleteMigrationRequestBuilder} from './completeMigration/completeMigrationRequestBuilder';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {IncomingChannelsRequestBuilder} from './incomingChannels/incomingChannelsRequestBuilder';
import {ChannelItemRequestBuilder as I07f22ad7f970e7962f87a88a72e166805a60579fae8e832c4cd978f506e75259} from './incomingChannels/item/channelItemRequestBuilder';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {TeamsAppInstallationItemRequestBuilder} from './installedApps/item/teamsAppInstallationItemRequestBuilder';
import {ConversationMemberItemRequestBuilder} from './members/item/conversationMemberItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {TeamsAsyncOperationItemRequestBuilder} from './operations/item/teamsAsyncOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {PrimaryChannelRequestBuilder} from './primaryChannel/primaryChannelRequestBuilder';
import {ScheduleRequestBuilder} from './schedule/scheduleRequestBuilder';
import {SendActivityNotificationRequestBuilder} from './sendActivityNotification/sendActivityNotificationRequestBuilder';
import {TeamworkTagItemRequestBuilder} from './tags/item/teamworkTagItemRequestBuilder';
import {TagsRequestBuilder} from './tags/tagsRequestBuilder';
import {TeamItemRequestBuilderDeleteRequestConfiguration} from './teamItemRequestBuilderDeleteRequestConfiguration';
import {TeamItemRequestBuilderGetRequestConfiguration} from './teamItemRequestBuilderGetRequestConfiguration';
import {TeamItemRequestBuilderPatchRequestConfiguration} from './teamItemRequestBuilderPatchRequestConfiguration';
import {TemplateRequestBuilder} from './template/templateRequestBuilder';
import {UnarchiveRequestBuilder} from './unarchive/unarchiveRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
 */
export class TeamItemRequestBuilder {
    /** Provides operations to manage the allChannels property of the microsoft.graph.team entity. */
    public get allChannels(): AllChannelsRequestBuilder {
        return new AllChannelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the archive method. */
    public get archive(): ArchiveRequestBuilder {
        return new ArchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the channels property of the microsoft.graph.team entity. */
    public get channels(): ChannelsRequestBuilder {
        return new ChannelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clone method. */
    public get clone(): CloneRequestBuilder {
        return new CloneRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the completeMigration method. */
    public get completeMigration(): CompleteMigrationRequestBuilder {
        return new CompleteMigrationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the group property of the microsoft.graph.team entity. */
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incomingChannels property of the microsoft.graph.team entity. */
    public get incomingChannels(): IncomingChannelsRequestBuilder {
        return new IncomingChannelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the installedApps property of the microsoft.graph.team entity. */
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.team entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.team entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the photo property of the microsoft.graph.team entity. */
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the primaryChannel property of the microsoft.graph.team entity. */
    public get primaryChannel(): PrimaryChannelRequestBuilder {
        return new PrimaryChannelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the schedule property of the microsoft.graph.team entity. */
    public get schedule(): ScheduleRequestBuilder {
        return new ScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sendActivityNotification method. */
    public get sendActivityNotification(): SendActivityNotificationRequestBuilder {
        return new SendActivityNotificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tags property of the microsoft.graph.team entity. */
    public get tags(): TagsRequestBuilder {
        return new TagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the template property of the microsoft.graph.team entity. */
    public get template(): TemplateRequestBuilder {
        return new TemplateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unarchive method. */
    public get unarchive(): UnarchiveRequestBuilder {
        return new UnarchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the allChannels property of the microsoft.graph.team entity.
     * @param id Unique identifier of the item
     * @returns a ChannelItemRequestBuilder
     */
    public allChannelsById(id: string) : I067c06e22d9cf3520a2fd897f6a402f420b68b5a8d7c4995c9a008ee24498b10 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = id
        return new I067c06e22d9cf3520a2fd897f6a402f420b68b5a8d7c4995c9a008ee24498b10(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the channels property of the microsoft.graph.team entity.
     * @param id Unique identifier of the item
     * @returns a ChannelItemRequestBuilder
     */
    public channelsById(id: string) : Ic289479f4fde5fafb16aee57f7567b1d7596179fc5ddc78276431e5c93a50878 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = id
        return new Ic289479f4fde5fafb16aee57f7567b1d7596179fc5ddc78276431e5c93a50878(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TeamItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property joinedTeams for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: TeamItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Get joinedTeams from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    public get(requestConfiguration?: TeamItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Team | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Team>(requestInfo, createTeamFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the incomingChannels property of the microsoft.graph.team entity.
     * @param id Unique identifier of the item
     * @returns a ChannelItemRequestBuilder
     */
    public incomingChannelsById(id: string) : I07f22ad7f970e7962f87a88a72e166805a60579fae8e832c4cd978f506e75259 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = id
        return new I07f22ad7f970e7962f87a88a72e166805a60579fae8e832c4cd978f506e75259(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
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
     * Provides operations to manage the members property of the microsoft.graph.team entity.
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
     * Provides operations to manage the operations property of the microsoft.graph.team entity.
     * @param id Unique identifier of the item
     * @returns a TeamsAsyncOperationItemRequestBuilder
     */
    public operationsById(id: string) : TeamsAsyncOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsAsyncOperation%2Did"] = id
        return new TeamsAsyncOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property joinedTeams in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    public patch(body: Team | undefined, requestConfiguration?: TeamItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Team | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Team>(requestInfo, createTeamFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the tags property of the microsoft.graph.team entity.
     * @param id Unique identifier of the item
     * @returns a TeamworkTagItemRequestBuilder
     */
    public tagsById(id: string) : TeamworkTagItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamworkTag%2Did"] = id
        return new TeamworkTagItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property joinedTeams for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TeamItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get joinedTeams from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property joinedTeams in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Team | undefined, requestConfiguration?: TeamItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
