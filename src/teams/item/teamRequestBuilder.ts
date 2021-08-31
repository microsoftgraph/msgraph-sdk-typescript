import {Team} from '../../team';
import {ChannelsRequestBuilder} from '../channels/channelsRequestBuilder';
import {ChannelRequestBuilder} from '../channels/item/channelRequestBuilder';
import {GroupRequestBuilder} from '../group/groupRequestBuilder';
import {InstalledAppsRequestBuilder} from '../installedApps/installedAppsRequestBuilder';
import {TeamsAppInstallationRequestBuilder} from '../installedApps/item/teamsAppInstallationRequestBuilder';
import {ConversationMemberRequestBuilder} from '../members/item/conversationMemberRequestBuilder';
import {MembersRequestBuilder} from '../members/membersRequestBuilder';
import {Microsoft.graph.archiveRequestBuilder} from '../microsoft/graph/archive/microsoft.graph.archiveRequestBuilder';
import {Microsoft.graph.cloneRequestBuilder} from '../microsoft/graph/clone/microsoft.graph.cloneRequestBuilder';
import {Microsoft.graph.completeMigrationRequestBuilder} from '../microsoft/graph/completeMigration/microsoft.graph.completeMigrationRequestBuilder';
import {Microsoft.graph.sendActivityNotificationRequestBuilder} from '../microsoft/graph/sendActivityNotification/microsoft.graph.sendActivityNotificationRequestBuilder';
import {Microsoft.graph.unarchiveRequestBuilder} from '../microsoft/graph/unarchive/microsoft.graph.unarchiveRequestBuilder';
import {TeamsAsyncOperationRequestBuilder} from '../operations/item/teamsAsyncOperationRequestBuilder';
import {OperationsRequestBuilder} from '../operations/operationsRequestBuilder';
import {PrimaryChannelRequestBuilder} from '../primaryChannel/primaryChannelRequestBuilder';
import {ScheduleRequestBuilder} from '../schedule/scheduleRequestBuilder';
import {TemplateRequestBuilder} from '../template/templateRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /teams/{team-id}  */
export class TeamRequestBuilder {
    public get channels(): ChannelsRequestBuilder {
        return new ChannelsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.archive(): Microsoft.graph.archiveRequestBuilder {
        return new Microsoft.graph.archiveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.clone(): Microsoft.graph.cloneRequestBuilder {
        return new Microsoft.graph.cloneRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.completeMigration(): Microsoft.graph.completeMigrationRequestBuilder {
        return new Microsoft.graph.completeMigrationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.sendActivityNotification(): Microsoft.graph.sendActivityNotificationRequestBuilder {
        return new Microsoft.graph.sendActivityNotificationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.unarchive(): Microsoft.graph.unarchiveRequestBuilder {
        return new Microsoft.graph.unarchiveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get primaryChannel(): PrimaryChannelRequestBuilder {
        return new PrimaryChannelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get schedule(): ScheduleRequestBuilder {
        return new ScheduleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get template(): TemplateRequestBuilder {
        return new TemplateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.teams.channels collection
     * @param id Unique identifier of the item
     * @returns a ChannelRequestBuilder
     */
    public channelsById(id: String) : ChannelRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ChannelRequestBuilder(this.currentPath + this.pathSegment + "/channels/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new TeamRequestBuilder and sets the default values.
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
     * Delete entity from teams
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
     * Get entity from teams by key
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
     * Update entity in teams
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Team | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Delete entity from teams
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
     * Get entity from teams by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Team | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Team>(requestInfo, Team, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.installedApps collection
     * @param id Unique identifier of the item
     * @returns a TeamsAppInstallationRequestBuilder
     */
    public installedAppsById(id: String) : TeamsAppInstallationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamsAppInstallationRequestBuilder(this.currentPath + this.pathSegment + "/installedApps/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.members collection
     * @param id Unique identifier of the item
     * @returns a ConversationMemberRequestBuilder
     */
    public membersById(id: String) : ConversationMemberRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConversationMemberRequestBuilder(this.currentPath + this.pathSegment + "/members/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.operations collection
     * @param id Unique identifier of the item
     * @returns a TeamsAsyncOperationRequestBuilder
     */
    public operationsById(id: String) : TeamsAsyncOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamsAsyncOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * Update entity in teams
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Team | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
