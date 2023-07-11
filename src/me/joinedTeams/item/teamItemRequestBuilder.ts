import {createTeamFromDiscriminatorValue} from '../../../models/createTeamFromDiscriminatorValue';
import {deserializeIntoTeam} from '../../../models/deserializeIntoTeam';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeTeam} from '../../../models/serializeTeam';
import {Team} from '../../../models/team';
import {AllChannelsRequestBuilder} from './allChannels/allChannelsRequestBuilder';
import {ArchiveRequestBuilder} from './archive/archiveRequestBuilder';
import {ChannelsRequestBuilder} from './channels/channelsRequestBuilder';
import {CloneRequestBuilder} from './clone/cloneRequestBuilder';
import {CompleteMigrationRequestBuilder} from './completeMigration/completeMigrationRequestBuilder';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {IncomingChannelsRequestBuilder} from './incomingChannels/incomingChannelsRequestBuilder';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {PrimaryChannelRequestBuilder} from './primaryChannel/primaryChannelRequestBuilder';
import {ScheduleRequestBuilder} from './schedule/scheduleRequestBuilder';
import {SendActivityNotificationRequestBuilder} from './sendActivityNotification/sendActivityNotificationRequestBuilder';
import {TagsRequestBuilder} from './tags/tagsRequestBuilder';
import {TeamItemRequestBuilderDeleteRequestConfiguration} from './teamItemRequestBuilderDeleteRequestConfiguration';
import {TeamItemRequestBuilderGetRequestConfiguration} from './teamItemRequestBuilderGetRequestConfiguration';
import {TeamItemRequestBuilderPatchRequestConfiguration} from './teamItemRequestBuilderPatchRequestConfiguration';
import {TemplateRequestBuilder} from './template/templateRequestBuilder';
import {UnarchiveRequestBuilder} from './unarchive/unarchiveRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
 */
export class TeamItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the allChannels property of the microsoft.graph.team entity.
     */
    public get allChannels(): AllChannelsRequestBuilder {
        return new AllChannelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the archive method.
     */
    public get archive(): ArchiveRequestBuilder {
        return new ArchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the channels property of the microsoft.graph.team entity.
     */
    public get channels(): ChannelsRequestBuilder {
        return new ChannelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the clone method.
     */
    public get clone(): CloneRequestBuilder {
        return new CloneRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the completeMigration method.
     */
    public get completeMigration(): CompleteMigrationRequestBuilder {
        return new CompleteMigrationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the group property of the microsoft.graph.team entity.
     */
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the incomingChannels property of the microsoft.graph.team entity.
     */
    public get incomingChannels(): IncomingChannelsRequestBuilder {
        return new IncomingChannelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
     */
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.team entity.
     */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.team entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the photo property of the microsoft.graph.team entity.
     */
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the primaryChannel property of the microsoft.graph.team entity.
     */
    public get primaryChannel(): PrimaryChannelRequestBuilder {
        return new PrimaryChannelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schedule property of the microsoft.graph.team entity.
     */
    public get schedule(): ScheduleRequestBuilder {
        return new ScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sendActivityNotification method.
     */
    public get sendActivityNotification(): SendActivityNotificationRequestBuilder {
        return new SendActivityNotificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tags property of the microsoft.graph.team entity.
     */
    public get tags(): TagsRequestBuilder {
        return new TagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the template property of the microsoft.graph.team entity.
     */
    public get template(): TemplateRequestBuilder {
        return new TemplateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unarchive method.
     */
    public get unarchive(): UnarchiveRequestBuilder {
        return new UnarchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TeamItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property joinedTeams for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: TeamItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get joinedTeams from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Team
     */
    public get(requestConfiguration?: TeamItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Team | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Team>(requestInfo, createTeamFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property joinedTeams in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Team
     */
    public patch(body: Team | undefined, requestConfiguration?: TeamItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Team | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Team>(requestInfo, createTeamFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property joinedTeams for me
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
     * Get joinedTeams from me
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
     * Update the navigation property joinedTeams in me
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTeam);
        return requestInfo;
    };
}
