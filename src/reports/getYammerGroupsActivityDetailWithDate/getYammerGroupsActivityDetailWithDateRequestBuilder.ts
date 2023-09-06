import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type GetYammerGroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration } from './getYammerGroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, DateOnly, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getYammerGroupsActivityDetail method.
 */
export class GetYammerGroupsActivityDetailWithDateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetYammerGroupsActivityDetailWithDateRequestBuilder and sets the default values.
     * @param date Usage: date={date}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, date?: DateOnly | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/getYammerGroupsActivityDetail(date={date})");
        this.pathParameters["date"] = date
    };
    /**
     * Invoke function getYammerGroupsActivityDetail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public get(requestConfiguration?: GetYammerGroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
     * Invoke function getYammerGroupsActivityDetail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetYammerGroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getYammerGroupsActivityDetailWithDateRequestBuilder
     */
    public withUrl(rawUrl: string) : GetYammerGroupsActivityDetailWithDateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetYammerGroupsActivityDetailWithDateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
