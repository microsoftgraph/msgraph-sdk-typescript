import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface StartRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the start method.
 */
export class StartRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new StartRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/jobs/{synchronizationJob%2Did}/start");
    };
    /**
     * Start an existing synchronization job. If the job is in a paused state, it will continue processing changes from the point where it was paused. If the job is in quarantine, the quarantine status will be cleared. Do not create scripts to call the start job continuously while it's running because that can cause the service to stop running. Use the start job only when the job is currently paused or in quarantine. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationjob-start?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: StartRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Start an existing synchronization job. If the job is in a paused state, it will continue processing changes from the point where it was paused. If the job is in quarantine, the quarantine status will be cleared. Do not create scripts to call the start job continuously while it's running because that can cause the service to stop running. Use the start job only when the job is currently paused or in quarantine. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: StartRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a startRequestBuilder
     */
    public withUrl(rawUrl: string) : StartRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new StartRequestBuilder(rawUrl, this.requestAdapter);
    };
}
