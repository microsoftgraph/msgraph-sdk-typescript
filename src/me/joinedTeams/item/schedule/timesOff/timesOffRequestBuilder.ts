import {TimeOff, TimeOffCollectionResponse} from '../../../../../models/';
import {createTimeOffCollectionResponseFromDiscriminatorValue} from '../../../../../models/createTimeOffCollectionResponseFromDiscriminatorValue';
import {createTimeOffFromDiscriminatorValue} from '../../../../../models/createTimeOffFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TimeOffItemRequestBuilder} from './item/timeOffItemRequestBuilder';
import {TimesOffRequestBuilderGetRequestConfiguration} from './timesOffRequestBuilderGetRequestConfiguration';
import {TimesOffRequestBuilderPostRequestConfiguration} from './timesOffRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
 */
export class TimesOffRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/schedule/timesOff{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * The instances of times off in the schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TimeOffCollectionResponse
     */
    public get(requestConfiguration?: TimesOffRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TimeOffCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TimeOffCollectionResponse>(requestInfo, createTimeOffCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to timesOff for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TimeOff
     */
    public post(body: TimeOff | undefined, requestConfiguration?: TimesOffRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TimeOff | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TimeOff>(requestInfo, createTimeOffFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The instances of times off in the schedule.
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
     * Create new navigation property to timesOff for me
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
