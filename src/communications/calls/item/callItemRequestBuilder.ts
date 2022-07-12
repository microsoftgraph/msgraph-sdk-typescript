import {Call} from '../../../models/';
import {createCallFromDiscriminatorValue} from '../../../models/createCallFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AnswerRequestBuilder} from './answer/answerRequestBuilder';
import {AudioRoutingGroupsRequestBuilder} from './audioRoutingGroups/audioRoutingGroupsRequestBuilder';
import {AudioRoutingGroupItemRequestBuilder} from './audioRoutingGroups/item/audioRoutingGroupItemRequestBuilder';
import {CallItemRequestBuilderDeleteRequestConfiguration} from './callItemRequestBuilderDeleteRequestConfiguration';
import {CallItemRequestBuilderGetRequestConfiguration} from './callItemRequestBuilderGetRequestConfiguration';
import {CallItemRequestBuilderPatchRequestConfiguration} from './callItemRequestBuilderPatchRequestConfiguration';
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

/** Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity. */
export class CallItemRequestBuilder {
    /** The answer property */
    public get answer(): AnswerRequestBuilder {
        return new AnswerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The audioRoutingGroups property */
    public get audioRoutingGroups(): AudioRoutingGroupsRequestBuilder {
        return new AudioRoutingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cancelMediaProcessing property */
    public get cancelMediaProcessing(): CancelMediaProcessingRequestBuilder {
        return new CancelMediaProcessingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The changeScreenSharingRole property */
    public get changeScreenSharingRole(): ChangeScreenSharingRoleRequestBuilder {
        return new ChangeScreenSharingRoleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The keepAlive property */
    public get keepAlive(): KeepAliveRequestBuilder {
        return new KeepAliveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mute property */
    public get mute(): MuteRequestBuilder {
        return new MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The operations property */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The participants property */
    public get participants(): ParticipantsRequestBuilder {
        return new ParticipantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The playPrompt property */
    public get playPrompt(): PlayPromptRequestBuilder {
        return new PlayPromptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The recordResponse property */
    public get recordResponse(): RecordResponseRequestBuilder {
        return new RecordResponseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The redirect property */
    public get redirect(): RedirectRequestBuilder {
        return new RedirectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The reject property */
    public get reject(): RejectRequestBuilder {
        return new RejectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The subscribeToTone property */
    public get subscribeToTone(): SubscribeToToneRequestBuilder {
        return new SubscribeToToneRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transfer property */
    public get transfer(): TransferRequestBuilder {
        return new TransferRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unmute property */
    public get unmute(): UnmuteRequestBuilder {
        return new UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The updateRecordingStatus property */
    public get updateRecordingStatus(): UpdateRecordingStatusRequestBuilder {
        return new UpdateRecordingStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.communications.calls.item.audioRoutingGroups.item collection
     * @param id Unique identifier of the item
     * @returns a audioRoutingGroupItemRequestBuilder
     */
    public audioRoutingGroupsById(id: string) : AudioRoutingGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["audioRoutingGroup%2Did"] = id
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
        this.urlTemplate = "{+baseurl}/communications/calls/{call%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property calls for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: CallItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get calls from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CallItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property calls in communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Call | undefined, requestConfiguration?: CallItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property calls for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CallItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get calls from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Call
     */
    public get(requestConfiguration?: CallItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Call | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
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
        urlTplParams["commsOperation%2Did"] = id
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
        urlTplParams["participant%2Did"] = id
        return new ParticipantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property calls in communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Call | undefined, requestConfiguration?: CallItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
