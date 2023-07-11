import {CalendarCollectionResponse} from '../../../models/';
import {Calendar} from '../../../models/calendar';
import {createCalendarCollectionResponseFromDiscriminatorValue} from '../../../models/createCalendarCollectionResponseFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from '../../../models/createCalendarFromDiscriminatorValue';
import {deserializeIntoCalendar} from '../../../models/deserializeIntoCalendar';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeCalendar} from '../../../models/serializeCalendar';
import {CalendarsRequestBuilderGetRequestConfiguration} from './calendarsRequestBuilderGetRequestConfiguration';
import {CalendarsRequestBuilderPostRequestConfiguration} from './calendarsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CalendarItemRequestBuilder} from './item/calendarItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendars property of the microsoft.graph.user entity.
 */
export class CalendarsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calendars property of the microsoft.graph.user entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/calendars{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get all the user's calendars (`/calendars` navigation property), get the calendars from the default calendar group or from a specific calendar group. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/user-list-calendars?view=graph-rest-1.0|Find more info here}
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
     * Create a new calendar for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Calendar
     * @see {@link https://docs.microsoft.com/graph/api/user-post-calendars?view=graph-rest-1.0|Find more info here}
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
     * Get all the user's calendars (`/calendars` navigation property), get the calendars from the default calendar group or from a specific calendar group. 
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
     * Create a new calendar for a user.
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
