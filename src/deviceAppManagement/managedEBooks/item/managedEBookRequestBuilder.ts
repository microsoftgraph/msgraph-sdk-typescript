import {ManagedEBook} from '../../managedEBook';
import {AssignRequestBuilder} from '../assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from '../assignments/assignmentsRequestBuilder';
import {ManagedEBookAssignmentRequestBuilder} from '../assignments/item/managedEBookAssignmentRequestBuilder';
import {DeviceStatesRequestBuilder} from '../deviceStates/deviceStatesRequestBuilder';
import {DeviceInstallStateRequestBuilder} from '../deviceStates/item/deviceInstallStateRequestBuilder';
import {InstallSummaryRequestBuilder} from '../installSummary/installSummaryRequestBuilder';
import {UserInstallStateSummaryRequestBuilder} from '../userStateSummary/item/userInstallStateSummaryRequestBuilder';
import {UserStateSummaryRequestBuilder} from '../userStateSummary/userStateSummaryRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement/managedEBooks/{managedEBook-id}  */
export class ManagedEBookRequestBuilder {
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deviceStates(): DeviceStatesRequestBuilder {
        return new DeviceStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get installSummary(): InstallSummaryRequestBuilder {
        return new InstallSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get userStateSummary(): UserStateSummaryRequestBuilder {
        return new UserStateSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedEBooks.assignments collection
     * @param id Unique identifier of the item
     * @returns a managedEBookAssignmentRequestBuilder
     */
    public assignmentsById(id: String) : ManagedEBookAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedEBookAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new ManagedEBookRequestBuilder and sets the default values.
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
     * The Managed eBook.
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
     * The Managed eBook.
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
     * The Managed eBook.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedEBook | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The Managed eBook.
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
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedEBooks.deviceStates collection
     * @param id Unique identifier of the item
     * @returns a deviceInstallStateRequestBuilder
     */
    public deviceStatesById(id: String) : DeviceInstallStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceInstallStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceStates/" + id, this.httpCore, false);
    };
    /**
     * The Managed eBook.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedEBook
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedEBook | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<ManagedEBook>(requestInfo, ManagedEBook, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The Managed eBook.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedEBook | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedEBooks.userStateSummary collection
     * @param id Unique identifier of the item
     * @returns a userInstallStateSummaryRequestBuilder
     */
    public userStateSummaryById(id: String) : UserInstallStateSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new UserInstallStateSummaryRequestBuilder(this.currentPath + this.pathSegment + "/userStateSummary/" + id, this.httpCore, false);
    };
}
