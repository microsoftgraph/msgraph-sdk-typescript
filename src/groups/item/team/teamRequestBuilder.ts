import {Team} from '../../../models/';
import {createTeamFromDiscriminatorValue} from '../../../models/createTeamFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllChannelsRequestBuilder} from './allChannels/allChannelsRequestBuilder';
import {ChannelItemRequestBuilder as i433db701b4db9643b4783afd1f1ef7b93ca5dccceb6b3dbf8c2336b622a83cc8} from './allChannels/item/channelItemRequestBuilder';
import {ArchiveRequestBuilder} from './archive/archiveRequestBuilder';
import {ChannelsRequestBuilder} from './channels/channelsRequestBuilder';
import {ChannelItemRequestBuilder as i7dc2d5f1b08cf4083a37a52ba5ba3daab69bd8b40ead5c3bc8309649375c16b4} from './channels/item/channelItemRequestBuilder';
import {CloneRequestBuilder} from './clone/cloneRequestBuilder';
import {CompleteMigrationRequestBuilder} from './completeMigration/completeMigrationRequestBuilder';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {IncomingChannelsRequestBuilder} from './incomingChannels/incomingChannelsRequestBuilder';
import {ChannelItemRequestBuilder as i2e0b53d55814d3ad8cec7e6853a1de1d521db78bdd75d2918115185eaf195ec3} from './incomingChannels/item/channelItemRequestBuilder';
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
import {TeamRequestBuilderDeleteRequestConfiguration} from './teamRequestBuilderDeleteRequestConfiguration';
import {TeamRequestBuilderGetRequestConfiguration} from './teamRequestBuilderGetRequestConfiguration';
import {TeamRequestBuilderPatchRequestConfiguration} from './teamRequestBuilderPatchRequestConfiguration';
import {TemplateRequestBuilder} from './template/templateRequestBuilder';
import {UnarchiveRequestBuilder} from './unarchive/unarchiveRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the team property of the microsoft.graph.group entity. */
export class TeamRequestBuilder {
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
    public allChannelsById(id: string) : i433db701b4db9643b4783afd1f1ef7b93ca5dccceb6b3dbf8c2336b622a83cc8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = id
        return new i433db701b4db9643b4783afd1f1ef7b93ca5dccceb6b3dbf8c2336b622a83cc8(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the channels property of the microsoft.graph.team entity.
     * @param id Unique identifier of the item
     * @returns a ChannelItemRequestBuilder
     */
    public channelsById(id: string) : i7dc2d5f1b08cf4083a37a52ba5ba3daab69bd8b40ead5c3bc8309649375c16b4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = id
        return new i7dc2d5f1b08cf4083a37a52ba5ba3daab69bd8b40ead5c3bc8309649375c16b4(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TeamRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/team{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property team for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: TeamRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The team associated with this group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TeamRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new team under a group. In order to create a team, the group must have a least one owner. If the group was created less than 15 minutes ago, it's possible for the Create team call to fail with a 404 error code due to replication delays. The recommended pattern is to retry the Create team call three times, with a 10 second delay between calls.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Team | undefined, requestConfiguration?: TeamRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Delete navigation property team for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: TeamRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * The team associated with this group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    public get(requestConfiguration?: TeamRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Team | undefined> {
        const requestInfo = this.createGetRequestInformation(
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
    public incomingChannelsById(id: string) : i2e0b53d55814d3ad8cec7e6853a1de1d521db78bdd75d2918115185eaf195ec3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = id
        return new i2e0b53d55814d3ad8cec7e6853a1de1d521db78bdd75d2918115185eaf195ec3(urlTplParams, this.requestAdapter);
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
     * Create a new team under a group. In order to create a team, the group must have a least one owner. If the group was created less than 15 minutes ago, it's possible for the Create team call to fail with a 404 error code due to replication delays. The recommended pattern is to retry the Create team call three times, with a 10 second delay between calls.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    public patch(body: Team | undefined, requestConfiguration?: TeamRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Team | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
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
}
