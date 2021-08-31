import {ManagedAppRegistration} from '../../../managedAppRegistration';
import {AppliedPoliciesRequestBuilder} from '../appliedPolicies/appliedPoliciesRequestBuilder';
import {ManagedAppPolicyRequestBuilder} from '../appliedPolicies/item/managedAppPolicyRequestBuilder';
import {IntendedPoliciesRequestBuilder} from '../intendedPolicies/intendedPoliciesRequestBuilder';
import {ManagedAppPolicyRequestBuilder} from '../intendedPolicies/item/managedAppPolicyRequestBuilder';
import {ManagedAppOperationRequestBuilder} from '../operations/item/managedAppOperationRequestBuilder';
import {OperationsRequestBuilder} from '../operations/operationsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}  */
export class ManagedAppRegistrationRequestBuilder {
    public get appliedPolicies(): AppliedPoliciesRequestBuilder {
        return new AppliedPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get intendedPolicies(): IntendedPoliciesRequestBuilder {
        return new IntendedPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedAppRegistrations.appliedPolicies collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyRequestBuilder
     */
    public appliedPoliciesById(id: String) : ManagedAppPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedAppPolicyRequestBuilder(this.currentPath + this.pathSegment + "/appliedPolicies/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new ManagedAppRegistrationRequestBuilder and sets the default values.
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
     * The managed app registrations.
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
     * The managed app registrations.
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
     * The managed app registrations.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedAppRegistration | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The managed app registrations.
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
     * The managed app registrations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppRegistration
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<ManagedAppRegistration>(requestInfo, ManagedAppRegistration, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedAppRegistrations.intendedPolicies collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyRequestBuilder
     */
    public intendedPoliciesById(id: String) : ManagedAppPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedAppPolicyRequestBuilder(this.currentPath + this.pathSegment + "/intendedPolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedAppRegistrations.operations collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppOperationRequestBuilder
     */
    public operationsById(id: String) : ManagedAppOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedAppOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * The managed app registrations.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedAppRegistration | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
