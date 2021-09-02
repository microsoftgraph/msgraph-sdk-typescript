import {Call} from '../../call';
import {AnswerRequestBuilder} from '../answer/answerRequestBuilder';
import {CancelMediaProcessingRequestBuilder} from '../cancelMediaProcessing/cancelMediaProcessingRequestBuilder';
import {ChangeScreenSharingRoleRequestBuilder} from '../changeScreenSharingRole/changeScreenSharingRoleRequestBuilder';
import {KeepAliveRequestBuilder} from '../keepAlive/keepAliveRequestBuilder';
import {MuteRequestBuilder} from '../mute/muteRequestBuilder';
import {CommsOperationRequestBuilder} from '../operations/item/commsOperationRequestBuilder';
import {OperationsRequestBuilder} from '../operations/operationsRequestBuilder';
import {ParticipantRequestBuilder} from '../participants/item/participantRequestBuilder';
import {ParticipantsRequestBuilder} from '../participants/participantsRequestBuilder';
import {PlayPromptRequestBuilder} from '../playPrompt/playPromptRequestBuilder';
import {RecordResponseRequestBuilder} from '../recordResponse/recordResponseRequestBuilder';
import {RedirectRequestBuilder} from '../redirect/redirectRequestBuilder';
import {RejectRequestBuilder} from '../reject/rejectRequestBuilder';
import {SubscribeToToneRequestBuilder} from '../subscribeToTone/subscribeToToneRequestBuilder';
import {TransferRequestBuilder} from '../transfer/transferRequestBuilder';
import {UnmuteRequestBuilder} from '../unmute/unmuteRequestBuilder';
import {UpdateRecordingStatusRequestBuilder} from '../updateRecordingStatus/updateRecordingStatusRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /communications/calls/{call-id}  */
export class CallRequestBuilder {
    public get answer(): AnswerRequestBuilder {
        return new AnswerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get cancelMediaProcessing(): CancelMediaProcessingRequestBuilder {
        return new CancelMediaProcessingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get changeScreenSharingRole(): ChangeScreenSharingRoleRequestBuilder {
        return new ChangeScreenSharingRoleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get keepAlive(): KeepAliveRequestBuilder {
        return new KeepAliveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mute(): MuteRequestBuilder {
        return new MuteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get participants(): ParticipantsRequestBuilder {
        return new ParticipantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get playPrompt(): PlayPromptRequestBuilder {
        return new PlayPromptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get recordResponse(): RecordResponseRequestBuilder {
        return new RecordResponseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get redirect(): RedirectRequestBuilder {
        return new RedirectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get reject(): RejectRequestBuilder {
        return new RejectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get subscribeToTone(): SubscribeToToneRequestBuilder {
        return new SubscribeToToneRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get transfer(): TransferRequestBuilder {
        return new TransferRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get unmute(): UnmuteRequestBuilder {
        return new UnmuteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get updateRecordingStatus(): UpdateRecordingStatusRequestBuilder {
        return new UpdateRecordingStatusRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
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
     * Get calls from communications
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
     * Update the navigation property calls in communications
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Call | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Delete navigation property calls for communications
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
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Call>(requestInfo, Call, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.communications.calls.operations collection
     * @param id Unique identifier of the item
     * @returns a commsOperationRequestBuilder
     */
    public operationsById(id: String) : CommsOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CommsOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.communications.calls.participants collection
     * @param id Unique identifier of the item
     * @returns a participantRequestBuilder
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
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
