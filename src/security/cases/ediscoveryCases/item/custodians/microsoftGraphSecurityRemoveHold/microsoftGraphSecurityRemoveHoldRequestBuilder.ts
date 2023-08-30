import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {deserializeIntoRemoveHoldPostRequestBody} from './deserializeIntoRemoveHoldPostRequestBody';
import {MicrosoftGraphSecurityRemoveHoldRequestBuilderPostRequestConfiguration} from './microsoftGraphSecurityRemoveHoldRequestBuilderPostRequestConfiguration';
import type {RemoveHoldPostRequestBody} from './removeHoldPostRequestBody';
import {serializeRemoveHoldPostRequestBody} from './serializeRemoveHoldPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the removeHold method.
 */
export class MicrosoftGraphSecurityRemoveHoldRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphSecurityRemoveHoldRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/microsoft.graph.security.removeHold");
    };
    /**
     * Invoke action removeHold
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public post(body: RemoveHoldPostRequestBody, requestConfiguration?: MicrosoftGraphSecurityRemoveHoldRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Invoke action removeHold
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RemoveHoldPostRequestBody, requestConfiguration?: MicrosoftGraphSecurityRemoveHoldRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRemoveHoldPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a microsoftGraphSecurityRemoveHoldRequestBuilder
     */
    public withUrl(rawUrl: string) : MicrosoftGraphSecurityRemoveHoldRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MicrosoftGraphSecurityRemoveHoldRequestBuilder(rawUrl, this.requestAdapter);
    };
}
