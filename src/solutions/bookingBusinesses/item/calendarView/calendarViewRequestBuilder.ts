import {BookingAppointmentCollectionResponse} from '../../../../models/';
import type {BookingAppointment} from '../../../../models/bookingAppointment';
import {createBookingAppointmentCollectionResponseFromDiscriminatorValue} from '../../../../models/createBookingAppointmentCollectionResponseFromDiscriminatorValue';
import {createBookingAppointmentFromDiscriminatorValue} from '../../../../models/createBookingAppointmentFromDiscriminatorValue';
import {deserializeIntoBookingAppointment} from '../../../../models/deserializeIntoBookingAppointment';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeBookingAppointment} from '../../../../models/serializeBookingAppointment';
import {CalendarViewRequestBuilderGetRequestConfiguration} from './calendarViewRequestBuilderGetRequestConfiguration';
import {CalendarViewRequestBuilderPostRequestConfiguration} from './calendarViewRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BookingAppointmentItemRequestBuilder} from './item/bookingAppointmentItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendarView property of the microsoft.graph.bookingBusiness entity.
 */
export class CalendarViewRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.bookingBusiness entity.
     * @param bookingAppointmentId The unique identifier of bookingAppointment
     * @returns a BookingAppointmentItemRequestBuilder
     */
    public byBookingAppointmentId(bookingAppointmentId: string) : BookingAppointmentItemRequestBuilder {
        if(!bookingAppointmentId) throw new Error("bookingAppointmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment%2Did"] = bookingAppointmentId
        return new BookingAppointmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarViewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/calendarView{?start*,end*,%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The set of appointments of this business in a specified date range. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingAppointmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/bookingbusiness-list-calendarview?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CalendarViewRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingAppointmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingAppointmentCollectionResponse>(requestInfo, createBookingAppointmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to calendarView for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingAppointment
     */
    public post(body: BookingAppointment, requestConfiguration?: CalendarViewRequestBuilderPostRequestConfiguration | undefined) : Promise<BookingAppointment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingAppointment>(requestInfo, createBookingAppointmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * The set of appointments of this business in a specified date range. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarViewRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to calendarView for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BookingAppointment, requestConfiguration?: CalendarViewRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBookingAppointment);
        return requestInfo;
    };
}
