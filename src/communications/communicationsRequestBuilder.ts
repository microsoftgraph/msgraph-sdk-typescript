import {CallRecordsRequestBuilder} from './callRecords/callRecordsRequestBuilder';
import {CallRecordRequestBuilder} from './callRecords/item/callRecordRequestBuilder';
import {CallsRequestBuilder} from './calls/callsRequestBuilder';
import {CallRequestBuilder} from './calls/item/callRequestBuilder';
import {CloudCommunications} from './cloudCommunications';
import {GetPresencesByUserIdRequestBuilder} from './getPresencesByUserId/getPresencesByUserIdRequestBuilder';
import {OnlineMeetingRequestBuilder} from './onlineMeetings/item/onlineMeetingRequestBuilder';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/onlineMeetingsRequestBuilder';
import {PresenceRequestBuilder} from './presences/item/presenceRequestBuilder';
import {PresencesRequestBuilder} from './presences/presencesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /communications  */
export class CommunicationsRequestBuilder {
    public get callRecords(): CallRecordsRequestBuilder {
        return new CallRecordsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calls(): CallsRequestBuilder {
        return new CallsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get getPresencesByUserId(): GetPresencesByUserIdRequestBuilder {
        return new GetPresencesByUserIdRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get presences(): PresencesRequestBuilder {
        return new PresencesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.communications.callRecords collection
     * @param id Unique identifier of the item
     * @returns a callRecordRequestBuilder
     */
    public callRecordsById(id: String) : CallRecordRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CallRecordRequestBuilder(this.currentPath + this.pathSegment + "/callRecords/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.communications.calls collection
     * @param id Unique identifier of the item
     * @returns a callRequestBuilder
     */
    public callsById(id: String) : CallRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CallRequestBuilder(this.currentPath + this.pathSegment + "/calls/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new CommunicationsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/communications";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get communications
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
     * Update communications
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: CloudCommunications | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Get communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CloudCommunications
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CloudCommunications | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<CloudCommunications>(requestInfo, CloudCommunications, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.communications.onlineMeetings collection
     * @param id Unique identifier of the item
     * @returns a onlineMeetingRequestBuilder
     */
    public onlineMeetingsById(id: String) : OnlineMeetingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnlineMeetingRequestBuilder(this.currentPath + this.pathSegment + "/onlineMeetings/" + id, this.httpCore, false);
    };
    /**
     * Update communications
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: CloudCommunications | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.communications.presences collection
     * @param id Unique identifier of the item
     * @returns a presenceRequestBuilder
     */
    public presencesById(id: String) : PresenceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PresenceRequestBuilder(this.currentPath + this.pathSegment + "/presences/" + id, this.httpCore, false);
    };
}
