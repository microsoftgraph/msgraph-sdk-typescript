import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, DateOnly, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetTeamsTeamActivityDetailWithDateRequestBuilderGetRequestConfiguration {
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
 * Provides operations to call the getTeamsTeamActivityDetail method.
 */
export class GetTeamsTeamActivityDetailWithDateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetTeamsTeamActivityDetailWithDateRequestBuilder and sets the default values.
     * @param date Usage: date={date}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, date?: DateOnly | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/getTeamsTeamActivityDetail(date={date})");
        this.pathParameters["date"] = date
    };
    /**
     * Invoke function getTeamsTeamActivityDetail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public get(requestConfiguration?: GetTeamsTeamActivityDetailWithDateRequestBuilderGetRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", errorMapping);
    };
    /**
     * Invoke function getTeamsTeamActivityDetail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetTeamsTeamActivityDetailWithDateRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getTeamsTeamActivityDetailWithDateRequestBuilder
     */
    public withUrl(rawUrl: string) : GetTeamsTeamActivityDetailWithDateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetTeamsTeamActivityDetailWithDateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
