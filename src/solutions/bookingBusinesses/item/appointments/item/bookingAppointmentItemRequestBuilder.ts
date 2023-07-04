import {BookingAppointment} from '../../../../../models/bookingAppointment';
import {createBookingAppointmentFromDiscriminatorValue} from '../../../../../models/createBookingAppointmentFromDiscriminatorValue';
import {deserializeIntoBookingAppointment} from '../../../../../models/deserializeIntoBookingAppointment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeBookingAppointment} from '../../../../../models/serializeBookingAppointment';
import {BookingAppointmentItemRequestBuilderDeleteRequestConfiguration} from './bookingAppointmentItemRequestBuilderDeleteRequestConfiguration';
import {BookingAppointmentItemRequestBuilderGetRequestConfiguration} from './bookingAppointmentItemRequestBuilderGetRequestConfiguration';
import {BookingAppointmentItemRequestBuilderPatchRequestConfiguration} from './bookingAppointmentItemRequestBuilderPatchRequestConfiguration';
import {CancelRequestBuilder} from './cancel/cancelRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appointments property of the microsoft.graph.bookingBusiness entity.
 */
export class BookingAppointmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the cancel method.
     */
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new BookingAppointmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/appointments/{bookingAppointment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a bookingAppointment in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/bookingappointment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BookingAppointmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Get the properties and relationships of a bookingAppointment object in the specified bookingBusiness. The **startDateTime** and **endDateTime** properties are always returned in UTC.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingAppointment
     * @see {@link https://docs.microsoft.com/graph/api/bookingappointment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BookingAppointmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingAppointment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingAppointment>(requestInfo, createBookingAppointmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a bookingAppointment object in the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingAppointment
     * @see {@link https://docs.microsoft.com/graph/api/bookingappointment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BookingAppointment | undefined, requestConfiguration?: BookingAppointmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BookingAppointment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingAppointment>(requestInfo, createBookingAppointmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a bookingAppointment in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BookingAppointmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get the properties and relationships of a bookingAppointment object in the specified bookingBusiness. The **startDateTime** and **endDateTime** properties are always returned in UTC.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BookingAppointmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a bookingAppointment object in the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: BookingAppointment | undefined, requestConfiguration?: BookingAppointmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBookingAppointment);
        return requestInfo;
    };
}
