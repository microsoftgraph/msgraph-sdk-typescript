import {createUnmuteParticipantOperationFromDiscriminatorValue} from '../../../../models/createUnmuteParticipantOperationFromDiscriminatorValue';
import {deserializeIntoUnmuteParticipantOperation} from '../../../../models/deserializeIntoUnmuteParticipantOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUnmuteParticipantOperation} from '../../../../models/serializeUnmuteParticipantOperation';
import {UnmuteParticipantOperation} from '../../../../models/unmuteParticipantOperation';
import {deserializeIntoUnmutePostRequestBody} from './deserializeIntoUnmutePostRequestBody';
import {serializeUnmutePostRequestBody} from './serializeUnmutePostRequestBody';
import {UnmutePostRequestBody} from './unmutePostRequestBody';
import {UnmuteRequestBuilderPostRequestConfiguration} from './unmuteRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the unmute method.
 */
export class UnmuteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnmuteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/unmute");
    };
    /**
     * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnmuteParticipantOperation
     * @see {@link https://docs.microsoft.com/graph/api/call-unmute?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnmutePostRequestBody | undefined, requestConfiguration?: UnmuteRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnmuteParticipantOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnmuteParticipantOperation>(requestInfo, createUnmuteParticipantOperationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnmutePostRequestBody | undefined, requestConfiguration?: UnmuteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnmutePostRequestBody);
        return requestInfo;
    };
}
