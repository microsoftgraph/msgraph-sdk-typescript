import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {GetOffice365GroupsActivityCountsWithPeriodRequestBuilderGetRequestConfiguration} from './getOffice365GroupsActivityCountsWithPeriodRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getOffice365GroupsActivityCounts method.
 */
export class GetOffice365GroupsActivityCountsWithPeriodRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetOffice365GroupsActivityCountsWithPeriodRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param period Usage: period='{period}'
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, period?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/getOffice365GroupsActivityCounts(period='{period}')");
        this.pathParameters["period"] = period
    };
    /**
     * Invoke function getOffice365GroupsActivityCounts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public get(requestConfiguration?: GetOffice365GroupsActivityCountsWithPeriodRequestBuilderGetRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
     * Invoke function getOffice365GroupsActivityCounts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetOffice365GroupsActivityCountsWithPeriodRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getOffice365GroupsActivityCountsWithPeriodRequestBuilder
     */
    public withUrl(rawUrl: string) : GetOffice365GroupsActivityCountsWithPeriodRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetOffice365GroupsActivityCountsWithPeriodRequestBuilder(rawUrl, this.requestAdapter);
    };
}
