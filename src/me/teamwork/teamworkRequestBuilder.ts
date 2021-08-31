import {Teamwork} from '../../teamwork/teamwork';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {UserScopeTeamsAppInstallationRequestBuilder} from './installedApps/item/userScopeTeamsAppInstallationRequestBuilder';
import {SendActivityNotificationRequestBuilder} from './sendActivityNotification/sendActivityNotificationRequestBuilder';
import {UserTeamwork} from './userTeamwork';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/teamwork  */
export class TeamworkRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get sendActivityNotification(): SendActivityNotificationRequestBuilder {
        return new SendActivityNotificationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new TeamworkRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/teamwork";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
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
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
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
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Teamwork | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
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
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserTeamwork
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserTeamwork | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<UserTeamwork>(requestInfo, UserTeamwork, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.teamwork.installedApps collection
     * @param id Unique identifier of the item
     * @returns a UserScopeTeamsAppInstallationRequestBuilder
     */
    public installedAppsById(id: String) : UserScopeTeamsAppInstallationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new UserScopeTeamsAppInstallationRequestBuilder(this.currentPath + this.pathSegment + "/installedApps/" + id, this.httpCore, false);
    };
    /**
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Teamwork | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
