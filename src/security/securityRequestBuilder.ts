import {AlertsRequestBuilder} from './alerts/alertsRequestBuilder';
import {AlertRequestBuilder} from './alerts/item/alertRequestBuilder';
import {SecureScoreControlProfileRequestBuilder} from './secureScoreControlProfiles/item/secureScoreControlProfileRequestBuilder';
import {SecureScoreControlProfilesRequestBuilder} from './secureScoreControlProfiles/secureScoreControlProfilesRequestBuilder';
import {SecureScoreRequestBuilder} from './secureScores/item/secureScoreRequestBuilder';
import {SecureScoresRequestBuilder} from './secureScores/secureScoresRequestBuilder';
import {Security} from './security';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /security  */
export class SecurityRequestBuilder {
    public get alerts(): AlertsRequestBuilder {
        return new AlertsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get secureScoreControlProfiles(): SecureScoreControlProfilesRequestBuilder {
        return new SecureScoreControlProfilesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get secureScores(): SecureScoresRequestBuilder {
        return new SecureScoresRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.security.alerts collection
     * @param id Unique identifier of the item
     * @returns a AlertRequestBuilder
     */
    public alertsById(id: String) : AlertRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AlertRequestBuilder(this.currentPath + this.pathSegment + "/alerts/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new SecurityRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/security";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get security
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
     * Update security
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Security | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Get security
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Security
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Security | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Security>(requestInfo, Security, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update security
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Security | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.security.secureScoreControlProfiles collection
     * @param id Unique identifier of the item
     * @returns a SecureScoreControlProfileRequestBuilder
     */
    public secureScoreControlProfilesById(id: String) : SecureScoreControlProfileRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SecureScoreControlProfileRequestBuilder(this.currentPath + this.pathSegment + "/secureScoreControlProfiles/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.security.secureScores collection
     * @param id Unique identifier of the item
     * @returns a SecureScoreRequestBuilder
     */
    public secureScoresById(id: String) : SecureScoreRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SecureScoreRequestBuilder(this.currentPath + this.pathSegment + "/secureScores/" + id, this.httpCore, false);
    };
}
