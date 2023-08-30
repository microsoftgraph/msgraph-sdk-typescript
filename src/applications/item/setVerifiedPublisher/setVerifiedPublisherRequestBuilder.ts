import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoSetVerifiedPublisherPostRequestBody} from './deserializeIntoSetVerifiedPublisherPostRequestBody';
import {serializeSetVerifiedPublisherPostRequestBody} from './serializeSetVerifiedPublisherPostRequestBody';
import type {SetVerifiedPublisherPostRequestBody} from './setVerifiedPublisherPostRequestBody';
import {SetVerifiedPublisherRequestBuilderPostRequestConfiguration} from './setVerifiedPublisherRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @see {@link https://learn.microsoft.com/graph/api/application-setverifiedpublisher?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SetVerifiedPublisherPostRequestBody, requestConfiguration?: SetVerifiedPublisherRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Set the verifiedPublisher on an application. For more information, including prerequisites to setting a verified publisher, see Publisher verification.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SetVerifiedPublisherPostRequestBody, requestConfiguration?: SetVerifiedPublisherRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSetVerifiedPublisherPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a setVerifiedPublisherRequestBuilder
     */
    public withUrl(rawUrl: string) : SetVerifiedPublisherRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SetVerifiedPublisherRequestBuilder(rawUrl, this.requestAdapter);
    };
}
