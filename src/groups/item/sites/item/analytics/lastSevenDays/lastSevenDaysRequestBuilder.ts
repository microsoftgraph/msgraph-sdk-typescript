import {ItemActivityStat} from '../../../../../../models/';
import {createItemActivityStatFromDiscriminatorValue} from '../../../../../../models/createItemActivityStatFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {LastSevenDaysRequestBuilderGetRequestConfiguration} from './lastSevenDaysRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lastSevenDays property of the microsoft.graph.itemAnalytics entity.
 */
export class LastSevenDaysRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LastSevenDaysRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/analytics/lastSevenDays{?%24select,%24expand}");
    };
    /**
     * Get lastSevenDays from groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivityStat
     */
    public get(requestConfiguration?: LastSevenDaysRequestBuilderGetRequestConfiguration | undefined) : Promise<ItemActivityStat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemActivityStat>(requestInfo, createItemActivityStatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get lastSevenDays from groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LastSevenDaysRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a lastSevenDaysRequestBuilder
     */
    public withUrl(rawUrl: string) : LastSevenDaysRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LastSevenDaysRequestBuilder(rawUrl, this.requestAdapter);
    };
}
