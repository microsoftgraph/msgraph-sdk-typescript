import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MicrosoftGraphSecurityCloseRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the close method.
 */
export class MicrosoftGraphSecurityCloseRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphSecurityCloseRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/microsoft.graph.security.close");
    };
    /**
     * Close an eDiscovery case. For details, see Close a case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-close?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: MicrosoftGraphSecurityCloseRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Close an eDiscovery case. For details, see Close a case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: MicrosoftGraphSecurityCloseRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a microsoftGraphSecurityCloseRequestBuilder
     */
    public withUrl(rawUrl: string) : MicrosoftGraphSecurityCloseRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MicrosoftGraphSecurityCloseRequestBuilder(rawUrl, this.requestAdapter);
    };
}
