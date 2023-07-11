import {TimeOffCollectionResponse} from '../../../../../models/';
import {createTimeOffCollectionResponseFromDiscriminatorValue} from '../../../../../models/createTimeOffCollectionResponseFromDiscriminatorValue';
import {createTimeOffFromDiscriminatorValue} from '../../../../../models/createTimeOffFromDiscriminatorValue';
import {deserializeIntoTimeOff} from '../../../../../models/deserializeIntoTimeOff';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeTimeOff} from '../../../../../models/serializeTimeOff';
import {TimeOff} from '../../../../../models/timeOff';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TimeOffItemRequestBuilder} from './item/timeOffItemRequestBuilder';
import {TimesOffRequestBuilderGetRequestConfiguration} from './timesOffRequestBuilderGetRequestConfiguration';
import {TimesOffRequestBuilderPostRequestConfiguration} from './timesOffRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param timeOffId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/schedule/timesOff{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the list of timeOff instances in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOffCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/schedule-list-timesoff?view=graph-rest-1.0|Find more info here}
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
     * @see {@link https://docs.microsoft.com/graph/api/schedule-post-timesoff?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TimeOff | undefined, requestConfiguration?: TimesOffRequestBuilderPostRequestConfiguration | undefined) : Promise<TimeOff | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: TimeOff | undefined, requestConfiguration?: TimesOffRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTimeOff);
        return requestInfo;
    };
}
