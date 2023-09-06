import { createMuteParticipantOperationFromDiscriminatorValue } from '../../../../../../models/createMuteParticipantOperationFromDiscriminatorValue';
import { deserializeIntoMuteParticipantOperation } from '../../../../../../models/deserializeIntoMuteParticipantOperation';
import { type MuteParticipantOperation } from '../../../../../../models/muteParticipantOperation';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeMuteParticipantOperation } from '../../../../../../models/serializeMuteParticipantOperation';
import { deserializeIntoMutePostRequestBody } from './deserializeIntoMutePostRequestBody';
import { type MutePostRequestBody } from './mutePostRequestBody';
import { type MuteRequestBuilderPostRequestConfiguration } from './muteRequestBuilderPostRequestConfiguration';
import { serializeMutePostRequestBody } from './serializeMutePostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the mute method.
 */
export class MuteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MuteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/participants/{participant%2Did}/mute");
    };
    /**
     * Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MuteParticipantOperation
     * @see {@link https://learn.microsoft.com/graph/api/participant-mute?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MutePostRequestBody, requestConfiguration?: MuteRequestBuilderPostRequestConfiguration | undefined) : Promise<MuteParticipantOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MuteParticipantOperation>(requestInfo, createMuteParticipantOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MutePostRequestBody, requestConfiguration?: MuteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMutePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a muteRequestBuilder
     */
    public withUrl(rawUrl: string) : MuteRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MuteRequestBuilder(rawUrl, this.requestAdapter);
    };
}
