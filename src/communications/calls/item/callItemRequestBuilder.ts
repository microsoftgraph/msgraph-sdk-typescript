import {Call} from '../../../models/';
import {createCallFromDiscriminatorValue} from '../../../models/createCallFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AddLargeGalleryViewRequestBuilder} from './addLargeGalleryView/addLargeGalleryViewRequestBuilder';
import {AnswerRequestBuilder} from './answer/answerRequestBuilder';
import {AudioRoutingGroupsRequestBuilder} from './audioRoutingGroups/audioRoutingGroupsRequestBuilder';
import {CallItemRequestBuilderDeleteRequestConfiguration} from './callItemRequestBuilderDeleteRequestConfiguration';
import {CallItemRequestBuilderGetRequestConfiguration} from './callItemRequestBuilderGetRequestConfiguration';
import {CallItemRequestBuilderPatchRequestConfiguration} from './callItemRequestBuilderPatchRequestConfiguration';
import {CancelMediaProcessingRequestBuilder} from './cancelMediaProcessing/cancelMediaProcessingRequestBuilder';
import {ChangeScreenSharingRoleRequestBuilder} from './changeScreenSharingRole/changeScreenSharingRoleRequestBuilder';
import {ContentSharingSessionsRequestBuilder} from './contentSharingSessions/contentSharingSessionsRequestBuilder';
import {KeepAliveRequestBuilder} from './keepAlive/keepAliveRequestBuilder';
import {MuteRequestBuilder} from './mute/muteRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {ParticipantsRequestBuilder} from './participants/participantsRequestBuilder';
import {PlayPromptRequestBuilder} from './playPrompt/playPromptRequestBuilder';
import {RecordResponseRequestBuilder} from './recordResponse/recordResponseRequestBuilder';
import {RedirectRequestBuilder} from './redirect/redirectRequestBuilder';
import {RejectRequestBuilder} from './reject/rejectRequestBuilder';
import {SubscribeToToneRequestBuilder} from './subscribeToTone/subscribeToToneRequestBuilder';
import {TransferRequestBuilder} from './transfer/transferRequestBuilder';
import {UnmuteRequestBuilder} from './unmute/unmuteRequestBuilder';
import {UpdateRecordingStatusRequestBuilder} from './updateRecordingStatus/updateRecordingStatusRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
 */
export class CallItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the addLargeGalleryView method. */
    public get addLargeGalleryView(): AddLargeGalleryViewRequestBuilder {
        return new AddLargeGalleryViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the answer method. */
    public get answer(): AnswerRequestBuilder {
        return new AnswerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity. */
    public get audioRoutingGroups(): AudioRoutingGroupsRequestBuilder {
        return new AudioRoutingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cancelMediaProcessing method. */
    public get cancelMediaProcessing(): CancelMediaProcessingRequestBuilder {
        return new CancelMediaProcessingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the changeScreenSharingRole method. */
    public get changeScreenSharingRole(): ChangeScreenSharingRoleRequestBuilder {
        return new ChangeScreenSharingRoleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity. */
    public get contentSharingSessions(): ContentSharingSessionsRequestBuilder {
        return new ContentSharingSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the keepAlive method. */
    public get keepAlive(): KeepAliveRequestBuilder {
        return new KeepAliveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mute method. */
    public get mute(): MuteRequestBuilder {
        return new MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.call entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the participants property of the microsoft.graph.call entity. */
    public get participants(): ParticipantsRequestBuilder {
        return new ParticipantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the playPrompt method. */
    public get playPrompt(): PlayPromptRequestBuilder {
        return new PlayPromptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the recordResponse method. */
    public get recordResponse(): RecordResponseRequestBuilder {
        return new RecordResponseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the redirect method. */
    public get redirect(): RedirectRequestBuilder {
        return new RedirectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the reject method. */
    public get reject(): RejectRequestBuilder {
        return new RejectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the subscribeToTone method. */
    public get subscribeToTone(): SubscribeToToneRequestBuilder {
        return new SubscribeToToneRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the transfer method. */
    public get transfer(): TransferRequestBuilder {
        return new TransferRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unmute method. */
    public get unmute(): UnmuteRequestBuilder {
        return new UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateRecordingStatus method. */
    public get updateRecordingStatus(): UpdateRecordingStatusRequestBuilder {
        return new UpdateRecordingStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CallItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property calls for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CallItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get calls from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Call
     */
    public get(requestConfiguration?: CallItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Call | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Call>(requestInfo, createCallFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property calls in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Call
     */
    public patch(body: Call | undefined, requestConfiguration?: CallItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Call | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Call>(requestInfo, createCallFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property calls for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CallItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public toGetRequestInformation(requestConfiguration?: CallItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property calls in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Call | undefined, requestConfiguration?: CallItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
