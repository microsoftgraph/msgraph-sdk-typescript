import {Call} from '../../../models/';
import {createCallFromDiscriminatorValue} from '../../../models/createCallFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AudioRoutingGroupsRequestBuilder} from './audioRoutingGroups/audioRoutingGroupsRequestBuilder';
import {AudioRoutingGroupItemRequestBuilder} from './audioRoutingGroups/item/audioRoutingGroupItemRequestBuilder';
import {CallItemRequestBuilderDeleteRequestConfiguration} from './callItemRequestBuilderDeleteRequestConfiguration';
import {CallItemRequestBuilderGetRequestConfiguration} from './callItemRequestBuilderGetRequestConfiguration';
import {CallItemRequestBuilderPatchRequestConfiguration} from './callItemRequestBuilderPatchRequestConfiguration';
import {ContentSharingSessionsRequestBuilder} from './contentSharingSessions/contentSharingSessionsRequestBuilder';
import {ContentSharingSessionItemRequestBuilder} from './contentSharingSessions/item/contentSharingSessionItemRequestBuilder';
import {MicrosoftGraphAddLargeGalleryViewRequestBuilder} from './microsoftGraphAddLargeGalleryView/microsoftGraphAddLargeGalleryViewRequestBuilder';
import {MicrosoftGraphAnswerRequestBuilder} from './microsoftGraphAnswer/microsoftGraphAnswerRequestBuilder';
import {MicrosoftGraphCancelMediaProcessingRequestBuilder} from './microsoftGraphCancelMediaProcessing/microsoftGraphCancelMediaProcessingRequestBuilder';
import {MicrosoftGraphChangeScreenSharingRoleRequestBuilder} from './microsoftGraphChangeScreenSharingRole/microsoftGraphChangeScreenSharingRoleRequestBuilder';
import {MicrosoftGraphKeepAliveRequestBuilder} from './microsoftGraphKeepAlive/microsoftGraphKeepAliveRequestBuilder';
import {MicrosoftGraphMuteRequestBuilder} from './microsoftGraphMute/microsoftGraphMuteRequestBuilder';
import {MicrosoftGraphPlayPromptRequestBuilder} from './microsoftGraphPlayPrompt/microsoftGraphPlayPromptRequestBuilder';
import {MicrosoftGraphRecordResponseRequestBuilder} from './microsoftGraphRecordResponse/microsoftGraphRecordResponseRequestBuilder';
import {MicrosoftGraphRedirectRequestBuilder} from './microsoftGraphRedirect/microsoftGraphRedirectRequestBuilder';
import {MicrosoftGraphRejectRequestBuilder} from './microsoftGraphReject/microsoftGraphRejectRequestBuilder';
import {MicrosoftGraphSubscribeToToneRequestBuilder} from './microsoftGraphSubscribeToTone/microsoftGraphSubscribeToToneRequestBuilder';
import {MicrosoftGraphTransferRequestBuilder} from './microsoftGraphTransfer/microsoftGraphTransferRequestBuilder';
import {MicrosoftGraphUnmuteRequestBuilder} from './microsoftGraphUnmute/microsoftGraphUnmuteRequestBuilder';
import {MicrosoftGraphUpdateRecordingStatusRequestBuilder} from './microsoftGraphUpdateRecordingStatus/microsoftGraphUpdateRecordingStatusRequestBuilder';
import {CommsOperationItemRequestBuilder} from './operations/item/commsOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {ParticipantItemRequestBuilder} from './participants/item/participantItemRequestBuilder';
import {ParticipantsRequestBuilder} from './participants/participantsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
 */
export class CallItemRequestBuilder {
    /** Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity. */
    public get audioRoutingGroups(): AudioRoutingGroupsRequestBuilder {
        return new AudioRoutingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity. */
    public get contentSharingSessions(): ContentSharingSessionsRequestBuilder {
        return new ContentSharingSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addLargeGalleryView method. */
    public get microsoftGraphAddLargeGalleryView(): MicrosoftGraphAddLargeGalleryViewRequestBuilder {
        return new MicrosoftGraphAddLargeGalleryViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the answer method. */
    public get microsoftGraphAnswer(): MicrosoftGraphAnswerRequestBuilder {
        return new MicrosoftGraphAnswerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cancelMediaProcessing method. */
    public get microsoftGraphCancelMediaProcessing(): MicrosoftGraphCancelMediaProcessingRequestBuilder {
        return new MicrosoftGraphCancelMediaProcessingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the changeScreenSharingRole method. */
    public get microsoftGraphChangeScreenSharingRole(): MicrosoftGraphChangeScreenSharingRoleRequestBuilder {
        return new MicrosoftGraphChangeScreenSharingRoleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the keepAlive method. */
    public get microsoftGraphKeepAlive(): MicrosoftGraphKeepAliveRequestBuilder {
        return new MicrosoftGraphKeepAliveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mute method. */
    public get microsoftGraphMute(): MicrosoftGraphMuteRequestBuilder {
        return new MicrosoftGraphMuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the playPrompt method. */
    public get microsoftGraphPlayPrompt(): MicrosoftGraphPlayPromptRequestBuilder {
        return new MicrosoftGraphPlayPromptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the recordResponse method. */
    public get microsoftGraphRecordResponse(): MicrosoftGraphRecordResponseRequestBuilder {
        return new MicrosoftGraphRecordResponseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the redirect method. */
    public get microsoftGraphRedirect(): MicrosoftGraphRedirectRequestBuilder {
        return new MicrosoftGraphRedirectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the reject method. */
    public get microsoftGraphReject(): MicrosoftGraphRejectRequestBuilder {
        return new MicrosoftGraphRejectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the subscribeToTone method. */
    public get microsoftGraphSubscribeToTone(): MicrosoftGraphSubscribeToToneRequestBuilder {
        return new MicrosoftGraphSubscribeToToneRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the transfer method. */
    public get microsoftGraphTransfer(): MicrosoftGraphTransferRequestBuilder {
        return new MicrosoftGraphTransferRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unmute method. */
    public get microsoftGraphUnmute(): MicrosoftGraphUnmuteRequestBuilder {
        return new MicrosoftGraphUnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateRecordingStatus method. */
    public get microsoftGraphUpdateRecordingStatus(): MicrosoftGraphUpdateRecordingStatusRequestBuilder {
        return new MicrosoftGraphUpdateRecordingStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.call entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the participants property of the microsoft.graph.call entity. */
    public get participants(): ParticipantsRequestBuilder {
        return new ParticipantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity.
     * @param id Unique identifier of the item
     * @returns a AudioRoutingGroupItemRequestBuilder
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
     * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
     * @param id Unique identifier of the item
     * @returns a ContentSharingSessionItemRequestBuilder
     */
    public contentSharingSessionsById(id: string) : ContentSharingSessionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentSharingSession%2Did"] = id
        return new ContentSharingSessionItemRequestBuilder(urlTplParams, this.requestAdapter);
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
     * Provides operations to manage the operations property of the microsoft.graph.call entity.
     * @param id Unique identifier of the item
     * @returns a CommsOperationItemRequestBuilder
     */
    public operationsById(id: string) : CommsOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["commsOperation%2Did"] = id
        return new CommsOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the participants property of the microsoft.graph.call entity.
     * @param id Unique identifier of the item
     * @returns a ParticipantItemRequestBuilder
     */
    public participantsById(id: string) : ParticipantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["participant%2Did"] = id
        return new ParticipantItemRequestBuilder(urlTplParams, this.requestAdapter);
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
