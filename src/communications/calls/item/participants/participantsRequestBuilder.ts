import {ParticipantCollectionResponse} from '../../../../models/';
import {createParticipantCollectionResponseFromDiscriminatorValue} from '../../../../models/createParticipantCollectionResponseFromDiscriminatorValue';
import {createParticipantFromDiscriminatorValue} from '../../../../models/createParticipantFromDiscriminatorValue';
import {deserializeIntoParticipant} from '../../../../models/deserializeIntoParticipant';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {Participant} from '../../../../models/participant';
import {serializeParticipant} from '../../../../models/serializeParticipant';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InviteRequestBuilder} from './invite/inviteRequestBuilder';
import {ParticipantItemRequestBuilder} from './item/participantItemRequestBuilder';
import {ParticipantsRequestBuilderGetRequestConfiguration} from './participantsRequestBuilderGetRequestConfiguration';
import {ParticipantsRequestBuilderPostRequestConfiguration} from './participantsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the participants property of the microsoft.graph.call entity.
 */
export class ParticipantsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the invite method.
     */
    public get invite(): InviteRequestBuilder {
        return new InviteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the participants property of the microsoft.graph.call entity.
     * @param participantId Unique identifier of the item
     * @returns a ParticipantItemRequestBuilder
     */
    public byParticipantId(participantId: string) : ParticipantItemRequestBuilder {
        if(!participantId) throw new Error("participantId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["participant%2Did"] = participantId
        return new ParticipantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ParticipantsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/participants{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of participant objects in the call.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ParticipantCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/call-list-participants?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ParticipantsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ParticipantCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ParticipantCollectionResponse>(requestInfo, createParticipantCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to participants for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Participant
     */
    public post(body: Participant | undefined, requestConfiguration?: ParticipantsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Participant | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<Participant>(requestInfo, createParticipantFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a list of participant objects in the call.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ParticipantsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to participants for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Participant | undefined, requestConfiguration?: ParticipantsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeParticipant);
        return requestInfo;
    };
}
