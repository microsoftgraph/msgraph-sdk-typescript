import {TimeOffReasonCollectionResponse} from '../../../../models/';
import {createTimeOffReasonCollectionResponseFromDiscriminatorValue} from '../../../../models/createTimeOffReasonCollectionResponseFromDiscriminatorValue';
import {createTimeOffReasonFromDiscriminatorValue} from '../../../../models/createTimeOffReasonFromDiscriminatorValue';
import {deserializeIntoTimeOffReason} from '../../../../models/deserializeIntoTimeOffReason';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeTimeOffReason} from '../../../../models/serializeTimeOffReason';
import {TimeOffReason} from '../../../../models/timeOffReason';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TimeOffReasonItemRequestBuilder} from './item/timeOffReasonItemRequestBuilder';
import {TimeOffReasonsRequestBuilderGetRequestConfiguration} from './timeOffReasonsRequestBuilderGetRequestConfiguration';
import {TimeOffReasonsRequestBuilderPostRequestConfiguration} from './timeOffReasonsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
 */
export class TimeOffReasonsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
     * @param timeOffReasonId Unique identifier of the item
     * @returns a TimeOffReasonItemRequestBuilder
     */
    public byTimeOffReasonId(timeOffReasonId: string) : TimeOffReasonItemRequestBuilder {
        if(!timeOffReasonId) throw new Error("timeOffReasonId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffReason%2Did"] = timeOffReasonId
        return new TimeOffReasonItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TimeOffReasonsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/schedule/timeOffReasons{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the list of timeOffReasons in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TimeOffReasonCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/schedule-list-timeoffreasons?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TimeOffReasonsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TimeOffReasonCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TimeOffReasonCollectionResponse>(requestInfo, createTimeOffReasonCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new timeOffReason.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TimeOffReason
     * @see {@link https://docs.microsoft.com/graph/api/schedule-post-timeoffreasons?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TimeOffReason | undefined, requestConfiguration?: TimeOffReasonsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TimeOffReason | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TimeOffReason>(requestInfo, createTimeOffReasonFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get the list of timeOffReasons in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TimeOffReasonsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new timeOffReason.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TimeOffReason | undefined, requestConfiguration?: TimeOffReasonsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTimeOffReason);
        return requestInfo;
    };
}
