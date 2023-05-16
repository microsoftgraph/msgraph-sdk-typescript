import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoSetVerifiedPublisherPostRequestBody} from './deserializeIntoSetVerifiedPublisherPostRequestBody';
import {serializeSetVerifiedPublisherPostRequestBody} from './serializeSetVerifiedPublisherPostRequestBody';
import {SetVerifiedPublisherPostRequestBody} from './setVerifiedPublisherPostRequestBody';
import {SetVerifiedPublisherRequestBuilderPostRequestConfiguration} from './setVerifiedPublisherRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the setVerifiedPublisher method.
 */
export class SetVerifiedPublisherRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SetVerifiedPublisherRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/setVerifiedPublisher");
    };
    /**
     * Set the verifiedPublisher on an application. For more information, including prerequisites to setting a verified publisher, see Publisher verification.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/application-setverifiedpublisher?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SetVerifiedPublisherPostRequestBody | undefined, requestConfiguration?: SetVerifiedPublisherRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Set the verifiedPublisher on an application. For more information, including prerequisites to setting a verified publisher, see Publisher verification.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SetVerifiedPublisherPostRequestBody | undefined, requestConfiguration?: SetVerifiedPublisherRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSetVerifiedPublisherPostRequestBody);
        return requestInfo;
    };
}
