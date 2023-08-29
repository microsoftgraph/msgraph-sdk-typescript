import {createInviteParticipantsOperationFromDiscriminatorValue} from '../../../../../models/createInviteParticipantsOperationFromDiscriminatorValue';
import {deserializeIntoInviteParticipantsOperation} from '../../../../../models/deserializeIntoInviteParticipantsOperation';
import type {InviteParticipantsOperation} from '../../../../../models/inviteParticipantsOperation';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeInviteParticipantsOperation} from '../../../../../models/serializeInviteParticipantsOperation';
import {deserializeIntoInvitePostRequestBody} from './deserializeIntoInvitePostRequestBody';
import type {InvitePostRequestBody} from './invitePostRequestBody';
import {InviteRequestBuilderPostRequestConfiguration} from './inviteRequestBuilderPostRequestConfiguration';
import {serializeInvitePostRequestBody} from './serializeInvitePostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the invite method.
 */
export class InviteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new InviteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/participants/invite");
    };
    /**
     * Invite participants to the active call. For more information about how to handle operations, see commsOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InviteParticipantsOperation
     * @see {@link https://learn.microsoft.com/graph/api/participant-invite?view=graph-rest-1.0|Find more info here}
     */
    public post(body: InvitePostRequestBody, requestConfiguration?: InviteRequestBuilderPostRequestConfiguration | undefined) : Promise<InviteParticipantsOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InviteParticipantsOperation>(requestInfo, createInviteParticipantsOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invite participants to the active call. For more information about how to handle operations, see commsOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InvitePostRequestBody, requestConfiguration?: InviteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInvitePostRequestBody);
        return requestInfo;
    };
}
