import {CalendarCollectionResponse} from '../../../../models/';
import type {Calendar} from '../../../../models/calendar';
import {createCalendarCollectionResponseFromDiscriminatorValue} from '../../../../models/createCalendarCollectionResponseFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from '../../../../models/createCalendarFromDiscriminatorValue';
import {deserializeIntoCalendar} from '../../../../models/deserializeIntoCalendar';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeCalendar} from '../../../../models/serializeCalendar';
import {CalendarsRequestBuilderGetRequestConfiguration} from './calendarsRequestBuilderGetRequestConfiguration';
import {CalendarsRequestBuilderPostRequestConfiguration} from './calendarsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CalendarItemRequestBuilder} from './item/calendarItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity.
 */
export class CalendarsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity.
     * @param calendarId Unique identifier of the item
     * @returns a CalendarItemRequestBuilder
     */
    public byCalendarId(calendarId: string) : CalendarItemRequestBuilder {
        if(!calendarId) throw new Error("calendarId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendar%2Did"] = calendarId
        return new CalendarItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendarGroups/{calendarGroup%2Did}/calendars{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Retrieve a list of calendars belonging to a calendar group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/calendargroup-list-calendars?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CalendarsRequestBuilderGetRequestConfiguration | undefined) : Promise<CalendarCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarCollectionResponse>(requestInfo, createCalendarCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Use this API to create a new calendar in a calendar group for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Calendar
     * @see {@link https://learn.microsoft.com/graph/api/calendargroup-post-calendars?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Calendar | undefined, requestConfiguration?: CalendarsRequestBuilderPostRequestConfiguration | undefined) : Promise<Calendar | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Calendar>(requestInfo, createCalendarFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of calendars belonging to a calendar group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to create a new calendar in a calendar group for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Calendar | undefined, requestConfiguration?: CalendarsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCalendar);
        return requestInfo;
    };
}
