import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type AcquireAccessTokenPostRequestBody } from './acquireAccessTokenPostRequestBody';
import { type AcquireAccessTokenRequestBuilderPostRequestConfiguration } from './acquireAccessTokenRequestBuilderPostRequestConfiguration';
import { deserializeIntoAcquireAccessTokenPostRequestBody } from './deserializeIntoAcquireAccessTokenPostRequestBody';
import { serializeAcquireAccessTokenPostRequestBody } from './serializeAcquireAccessTokenPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the acquireAccessToken method.
 */
export class AcquireAccessTokenRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AcquireAccessTokenRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/synchronization/acquireAccessToken");
    };
    /**
     * Acquire an OAuth access token to authorize the Azure AD provisioning service to provision users into an application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronization-acquireaccesstoken?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AcquireAccessTokenPostRequestBody, requestConfiguration?: AcquireAccessTokenRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Acquire an OAuth access token to authorize the Azure AD provisioning service to provision users into an application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AcquireAccessTokenPostRequestBody, requestConfiguration?: AcquireAccessTokenRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAcquireAccessTokenPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a acquireAccessTokenRequestBuilder
     */
    public withUrl(rawUrl: string) : AcquireAccessTokenRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AcquireAccessTokenRequestBuilder(rawUrl, this.requestAdapter);
    };
}
