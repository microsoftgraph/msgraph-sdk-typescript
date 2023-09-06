import { type TimeOffCollectionResponse } from '../../../../models/';
import { createTimeOffCollectionResponseFromDiscriminatorValue } from '../../../../models/createTimeOffCollectionResponseFromDiscriminatorValue';
import { createTimeOffFromDiscriminatorValue } from '../../../../models/createTimeOffFromDiscriminatorValue';
import { deserializeIntoTimeOff } from '../../../../models/deserializeIntoTimeOff';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeTimeOff } from '../../../../models/serializeTimeOff';
import { type TimeOff } from '../../../../models/timeOff';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TimeOffItemRequestBuilder } from './item/timeOffItemRequestBuilder';
import { type TimesOffRequestBuilderGetRequestConfiguration } from './timesOffRequestBuilderGetRequestConfiguration';
import { type TimesOffRequestBuilderPostRequestConfiguration } from './timesOffRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
 */
export class TimesOffRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
     * @param timeOffId The unique identifier of timeOff
     * @returns a TimeOffItemRequestBuilder
     */
    public byTimeOffId(timeOffId: string) : TimeOffItemRequestBuilder {
        if(!timeOffId) throw new Error("timeOffId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOff%2Did"] = timeOffId
        return new TimeOffItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TimesOffRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/schedule/timesOff{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the list of timeOff instances in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOffCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/schedule-list-timesoff?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TimesOffRequestBuilderGetRequestConfiguration | undefined) : Promise<TimeOffCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TimeOffCollectionResponse>(requestInfo, createTimeOffCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new timeOff instance in a schedule.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOff
     * @see {@link https://learn.microsoft.com/graph/api/schedule-post-timesoff?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TimeOff, requestConfiguration?: TimesOffRequestBuilderPostRequestConfiguration | undefined) : Promise<TimeOff | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TimeOff>(requestInfo, createTimeOffFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of timeOff instances in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TimesOffRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new timeOff instance in a schedule.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TimeOff, requestConfiguration?: TimesOffRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTimeOff);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a timesOffRequestBuilder
     */
    public withUrl(rawUrl: string) : TimesOffRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TimesOffRequestBuilder(rawUrl, this.requestAdapter);
    };
}
