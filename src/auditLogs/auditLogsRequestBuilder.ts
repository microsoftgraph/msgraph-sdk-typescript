import {AuditLogRoot} from './auditLogRoot';
import {AuditLogs} from './auditLogs';
import {DirectoryAuditsRequestBuilder} from './directoryAudits/directoryAuditsRequestBuilder';
import {DirectoryAuditRequestBuilder} from './directoryAudits/item/directoryAuditRequestBuilder';
import {ProvisioningObjectSummaryRequestBuilder} from './provisioning/item/provisioningObjectSummaryRequestBuilder';
import {ProvisioningRequestBuilder} from './provisioning/provisioningRequestBuilder';
import {RestrictedSignInRequestBuilder} from './restrictedSignIns/item/restrictedSignInRequestBuilder';
import {RestrictedSignInsRequestBuilder} from './restrictedSignIns/restrictedSignInsRequestBuilder';
import {SignInRequestBuilder} from './signIns/item/signInRequestBuilder';
import {SignInsRequestBuilder} from './signIns/signInsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /auditLogs  */
export class AuditLogsRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get directoryAudits(): DirectoryAuditsRequestBuilder {
        return new DirectoryAuditsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get provisioning(): ProvisioningRequestBuilder {
        return new ProvisioningRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get restrictedSignIns(): RestrictedSignInsRequestBuilder {
        return new RestrictedSignInsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get signIns(): SignInsRequestBuilder {
        return new SignInsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new AuditLogsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/auditLogs";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get auditLogs
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
     * Update auditLogs
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AuditLogs | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Gets an item from the graphtypescriptv4.utilities.auditLogs.directoryAudits collection
     * @param id Unique identifier of the item
     * @returns a DirectoryAuditRequestBuilder
     */
    public directoryAuditsById(id: String) : DirectoryAuditRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DirectoryAuditRequestBuilder(this.currentPath + this.pathSegment + "/directoryAudits/" + id, this.httpCore, false);
    };
    /**
     * Get auditLogs
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuditLogRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuditLogRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<AuditLogRoot>(requestInfo, AuditLogRoot, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update auditLogs
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: AuditLogs | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.auditLogs.provisioning collection
     * @param id Unique identifier of the item
     * @returns a ProvisioningObjectSummaryRequestBuilder
     */
    public provisioningById(id: String) : ProvisioningObjectSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ProvisioningObjectSummaryRequestBuilder(this.currentPath + this.pathSegment + "/provisioning/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.auditLogs.restrictedSignIns collection
     * @param id Unique identifier of the item
     * @returns a RestrictedSignInRequestBuilder
     */
    public restrictedSignInsById(id: String) : RestrictedSignInRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new RestrictedSignInRequestBuilder(this.currentPath + this.pathSegment + "/restrictedSignIns/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.auditLogs.signIns collection
     * @param id Unique identifier of the item
     * @returns a SignInRequestBuilder
     */
    public signInsById(id: String) : SignInRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SignInRequestBuilder(this.currentPath + this.pathSegment + "/signIns/" + id, this.httpCore, false);
    };
}
