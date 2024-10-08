/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createBookingAppointmentCollectionResponseFromDiscriminatorValue, createBookingAppointmentFromDiscriminatorValue, serializeBookingAppointment, type BookingAppointment, type BookingAppointmentCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { BookingAppointmentItemRequestBuilderNavigationMetadata, BookingAppointmentItemRequestBuilderRequestsMetadata, type BookingAppointmentItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appointments property of the microsoft.graph.bookingBusiness entity.
 */
export interface AppointmentsRequestBuilder extends BaseRequestBuilder<AppointmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the appointments property of the microsoft.graph.bookingBusiness entity.
     * @param bookingAppointmentId The unique identifier of bookingAppointment
     * @returns {BookingAppointmentItemRequestBuilder}
     */
     byBookingAppointmentId(bookingAppointmentId: string) : BookingAppointmentItemRequestBuilder;
    /**
     * Get a list of bookingAppointment objects for the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BookingAppointmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/bookingbusiness-list-appointments?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AppointmentsRequestBuilderGetQueryParameters> | undefined) : Promise<BookingAppointmentCollectionResponse | undefined>;
    /**
     * Create a new bookingAppointment for the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BookingAppointment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/bookingbusiness-post-appointments?view=graph-rest-1.0|Find more info here}
     */
     post(body: BookingAppointment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BookingAppointment | undefined>;
    /**
     * Get a list of bookingAppointment objects for the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AppointmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new bookingAppointment for the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: BookingAppointment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of bookingAppointment objects for the specified bookingBusiness.
 */
export interface AppointmentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const AppointmentsRequestBuilderUriTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/appointments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AppointmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AppointmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AppointmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byBookingAppointmentId: {
        requestsMetadata: BookingAppointmentItemRequestBuilderRequestsMetadata,
        navigationMetadata: BookingAppointmentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["bookingAppointment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AppointmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AppointmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBookingAppointmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AppointmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AppointmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBookingAppointmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBookingAppointment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
