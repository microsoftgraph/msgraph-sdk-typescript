import {Call} from '../../call';
import {Microsoft.graph.answerRequestBuilder} from '../microsoft/graph/answer/microsoft.graph.answerRequestBuilder';
import {Microsoft.graph.cancelMediaProcessingRequestBuilder} from '../microsoft/graph/cancelMediaProcessing/microsoft.graph.cancelMediaProcessingRequestBuilder';
import {Microsoft.graph.changeScreenSharingRoleRequestBuilder} from '../microsoft/graph/changeScreenSharingRole/microsoft.graph.changeScreenSharingRoleRequestBuilder';
import {Microsoft.graph.keepAliveRequestBuilder} from '../microsoft/graph/keepAlive/microsoft.graph.keepAliveRequestBuilder';
import {Microsoft.graph.muteRequestBuilder} from '../microsoft/graph/mute/microsoft.graph.muteRequestBuilder';
import {Microsoft.graph.playPromptRequestBuilder} from '../microsoft/graph/playPrompt/microsoft.graph.playPromptRequestBuilder';
import {Microsoft.graph.recordResponseRequestBuilder} from '../microsoft/graph/recordResponse/microsoft.graph.recordResponseRequestBuilder';
import {Microsoft.graph.redirectRequestBuilder} from '../microsoft/graph/redirect/microsoft.graph.redirectRequestBuilder';
import {Microsoft.graph.rejectRequestBuilder} from '../microsoft/graph/reject/microsoft.graph.rejectRequestBuilder';
import {Microsoft.graph.subscribeToToneRequestBuilder} from '../microsoft/graph/subscribeToTone/microsoft.graph.subscribeToToneRequestBuilder';
import {Microsoft.graph.transferRequestBuilder} from '../microsoft/graph/transfer/microsoft.graph.transferRequestBuilder';
import {Microsoft.graph.unmuteRequestBuilder} from '../microsoft/graph/unmute/microsoft.graph.unmuteRequestBuilder';
import {Microsoft.graph.updateRecordingStatusRequestBuilder} from '../microsoft/graph/updateRecordingStatus/microsoft.graph.updateRecordingStatusRequestBuilder';
import {CommsOperationRequestBuilder} from '../operations/item/commsOperationRequestBuilder';
import {OperationsRequestBuilder} from '../operations/operationsRequestBuilder';
import {ParticipantRequestBuilder} from '../participants/item/participantRequestBuilder';
import {ParticipantsRequestBuilder} from '../participants/participantsRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /communications/calls/{call-id}  */
export class CallRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.answer(): Microsoft.graph.answerRequestBuilder {
        return new Microsoft.graph.answerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.cancelMediaProcessing(): Microsoft.graph.cancelMediaProcessingRequestBuilder {
        return new Microsoft.graph.cancelMediaProcessingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.changeScreenSharingRole(): Microsoft.graph.changeScreenSharingRoleRequestBuilder {
        return new Microsoft.graph.changeScreenSharingRoleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.keepAlive(): Microsoft.graph.keepAliveRequestBuilder {
        return new Microsoft.graph.keepAliveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.mute(): Microsoft.graph.muteRequestBuilder {
        return new Microsoft.graph.muteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.playPrompt(): Microsoft.graph.playPromptRequestBuilder {
        return new Microsoft.graph.playPromptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.recordResponse(): Microsoft.graph.recordResponseRequestBuilder {
        return new Microsoft.graph.recordResponseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.redirect(): Microsoft.graph.redirectRequestBuilder {
        return new Microsoft.graph.redirectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.reject(): Microsoft.graph.rejectRequestBuilder {
        return new Microsoft.graph.rejectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.subscribeToTone(): Microsoft.graph.subscribeToToneRequestBuilder {
        return new Microsoft.graph.subscribeToToneRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.transfer(): Microsoft.graph.transferRequestBuilder {
        return new Microsoft.graph.transferRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.unmute(): Microsoft.graph.unmuteRequestBuilder {
        return new Microsoft.graph.unmuteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.updateRecordingStatus(): Microsoft.graph.updateRecordingStatusRequestBuilder {
        return new Microsoft.graph.updateRecordingStatusRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get participants(): ParticipantsRequestBuilder {
        return new ParticipantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new CallRequestBuilder and sets the default values.
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
     * Delete navigation property calls for communications
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
     * Get calls from communications
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
     * Update the navigation property calls in communications
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Call | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Delete navigation property calls for communications
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
     * Get calls from communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Call
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Call | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Call>(requestInfo, Call, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.communications.calls.operations collection
     * @param id Unique identifier of the item
     * @returns a CommsOperationRequestBuilder
     */
    public operationsById(id: String) : CommsOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CommsOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.communications.calls.participants collection
     * @param id Unique identifier of the item
     * @returns a ParticipantRequestBuilder
     */
    public participantsById(id: String) : ParticipantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ParticipantRequestBuilder(this.currentPath + this.pathSegment + "/participants/" + id, this.httpCore, false);
    };
    /**
     * Update the navigation property calls in communications
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Call | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
