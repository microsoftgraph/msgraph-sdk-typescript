import type {BookingService} from '../../../../../models/bookingService';
import {createBookingServiceFromDiscriminatorValue} from '../../../../../models/createBookingServiceFromDiscriminatorValue';
import {deserializeIntoBookingService} from '../../../../../models/deserializeIntoBookingService';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeBookingService} from '../../../../../models/serializeBookingService';
import {BookingServiceItemRequestBuilderDeleteRequestConfiguration} from './bookingServiceItemRequestBuilderDeleteRequestConfiguration';
import {BookingServiceItemRequestBuilderGetRequestConfiguration} from './bookingServiceItemRequestBuilderGetRequestConfiguration';
import {BookingServiceItemRequestBuilderPatchRequestConfiguration} from './bookingServiceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the services property of the microsoft.graph.bookingBusiness entity.
 */
export class BookingServiceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BookingServiceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/services/{bookingService%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a bookingService object in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/bookingservice-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BookingServiceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the properties and relationships of a bookingService object in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingService
     * @see {@link https://learn.microsoft.com/graph/api/bookingservice-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BookingServiceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingService | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingService>(requestInfo, createBookingServiceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a bookingService object in the specified bookingBusiness. The following are some examples you can customize for a service:- Price- Typical length of an appointment- Reminders- Any time buffer to set up before or finish up after the service- Scheduling policy parameters, such as minimum notice to book or cancel, and whether customers can select specific staff members for an appointment.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingService
     * @see {@link https://learn.microsoft.com/graph/api/bookingservice-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BookingService, requestConfiguration?: BookingServiceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BookingService | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingService>(requestInfo, createBookingServiceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a bookingService object in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BookingServiceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of a bookingService object in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BookingServiceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a bookingService object in the specified bookingBusiness. The following are some examples you can customize for a service:- Price- Typical length of an appointment- Reminders- Any time buffer to set up before or finish up after the service- Scheduling policy parameters, such as minimum notice to book or cancel, and whether customers can select specific staff members for an appointment.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: BookingService, requestConfiguration?: BookingServiceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBookingService);
        return requestInfo;
    };
}
