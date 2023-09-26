import { type ParticipantCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createParticipantFromDiscriminatorValue, deserializeIntoParticipant, serializeParticipant, type Participant } from '../../../../models/participant';
import { createParticipantCollectionResponseFromDiscriminatorValue } from '../../../../models/participantCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { InviteRequestBuilder } from './invite/inviteRequestBuilder';
import { ParticipantItemRequestBuilder } from './item/participantItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ParticipantsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface ParticipantsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: ParticipantsRequestBuilderGetQueryParameters;
}
export interface ParticipantsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
     * @param participantId The unique identifier of participant
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
     * @returns a Promise of ParticipantCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/call-list-participants?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ParticipantsRequestBuilderGetRequestConfiguration | undefined) : Promise<ParticipantCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ParticipantCollectionResponse>(requestInfo, createParticipantCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to participants for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Participant
     */
    public post(body: Participant, requestConfiguration?: ParticipantsRequestBuilderPostRequestConfiguration | undefined) : Promise<Participant | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Participant>(requestInfo, createParticipantFromDiscriminatorValue, errorMapping);
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
    public toPostRequestInformation(body: Participant, requestConfiguration?: ParticipantsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeParticipant);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a participantsRequestBuilder
     */
    public withUrl(rawUrl: string) : ParticipantsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ParticipantsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
