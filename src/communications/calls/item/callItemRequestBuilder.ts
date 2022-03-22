import {Call} from '../../../models/microsoft/graph/';
import {createCallFromDiscriminatorValue} from '../../../models/microsoft/graph/createCallFromDiscriminatorValue';
import {ODataError} from '../../../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AnswerRequestBuilder} from './answer/answerRequestBuilder';
import {AudioRoutingGroupsRequestBuilder} from './audioRoutingGroups/audioRoutingGroupsRequestBuilder';
import {AudioRoutingGroupItemRequestBuilder} from './audioRoutingGroups/item/audioRoutingGroupItemRequestBuilder';
import {CancelMediaProcessingRequestBuilder} from './cancelMediaProcessing/cancelMediaProcessingRequestBuilder';
import {ChangeScreenSharingRoleRequestBuilder} from './changeScreenSharingRole/changeScreenSharingRoleRequestBuilder';
import {KeepAliveRequestBuilder} from './keepAlive/keepAliveRequestBuilder';
import {MuteRequestBuilder} from './mute/muteRequestBuilder';
import {CommsOperationItemRequestBuilder} from './operations/item/commsOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {ParticipantItemRequestBuilder} from './participants/item/participantItemRequestBuilder';
import {ParticipantsRequestBuilder} from './participants/participantsRequestBuilder';
import {PlayPromptRequestBuilder} from './playPrompt/playPromptRequestBuilder';
import {RecordResponseRequestBuilder} from './recordResponse/recordResponseRequestBuilder';
import {RedirectRequestBuilder} from './redirect/redirectRequestBuilder';
import {RejectRequestBuilder} from './reject/rejectRequestBuilder';
import {SubscribeToToneRequestBuilder} from './subscribeToTone/subscribeToToneRequestBuilder';
import {TransferRequestBuilder} from './transfer/transferRequestBuilder';
import {UnmuteRequestBuilder} from './unmute/unmuteRequestBuilder';
import {UpdateRecordingStatusRequestBuilder} from './updateRecordingStatus/updateRecordingStatusRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.  */
export class CallItemRequestBuilder {
    public get answer(): AnswerRequestBuilder {
        return new AnswerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get audioRoutingGroups(): AudioRoutingGroupsRequestBuilder {
        return new AudioRoutingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cancelMediaProcessing(): CancelMediaProcessingRequestBuilder {
        return new CancelMediaProcessingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get changeScreenSharingRole(): ChangeScreenSharingRoleRequestBuilder {
        return new ChangeScreenSharingRoleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get keepAlive(): KeepAliveRequestBuilder {
        return new KeepAliveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mute(): MuteRequestBuilder {
        return new MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get participants(): ParticipantsRequestBuilder {
        return new ParticipantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get playPrompt(): PlayPromptRequestBuilder {
        return new PlayPromptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get recordResponse(): RecordResponseRequestBuilder {
        return new RecordResponseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get redirect(): RedirectRequestBuilder {
        return new RedirectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get reject(): RejectRequestBuilder {
        return new RejectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get subscribeToTone(): SubscribeToToneRequestBuilder {
        return new SubscribeToToneRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transfer(): TransferRequestBuilder {
        return new TransferRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unmute(): UnmuteRequestBuilder {
        return new UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get updateRecordingStatus(): UpdateRecordingStatusRequestBuilder {
        return new UpdateRecordingStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.communications.calls.item.audioRoutingGroups.item collection
     * @param id Unique identifier of the item
     * @returns a audioRoutingGroupItemRequestBuilder
     */
    public audioRoutingGroupsById(id: string) : AudioRoutingGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["audioRoutingGroup_id"] = id
        return new AudioRoutingGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CallItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications/calls/{call_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property calls for communications
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get calls from communications
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property calls in communications
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Call | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property calls for communications
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get calls from communications
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Call
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Call | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Call>(requestInfo, createCallFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.communications.calls.item.operations.item collection
     * @param id Unique identifier of the item
     * @returns a commsOperationItemRequestBuilder
     */
    public operationsById(id: string) : CommsOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["commsOperation_id"] = id
        return new CommsOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.communications.calls.item.participants.item collection
     * @param id Unique identifier of the item
     * @returns a participantItemRequestBuilder
     */
    public participantsById(id: string) : ParticipantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["participant_id"] = id
        return new ParticipantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property calls in communications
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Call | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
