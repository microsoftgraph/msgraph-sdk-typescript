import {BookingBusiness} from '../../../models/';
import {createBookingBusinessFromDiscriminatorValue} from '../../../models/createBookingBusinessFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AppointmentsRequestBuilder} from './appointments/appointmentsRequestBuilder';
import {BookingAppointmentItemRequestBuilder as i549df13af914f5d18415b6b2e317bb0de2c91be54aaca79fb0e27b0aa2649626} from './appointments/item/bookingAppointmentItemRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {BookingAppointmentItemRequestBuilder as i286c0648ce5b2f5904e9046a9ca0cb117fe36890723bbbf3f391f7bbdb3c085b} from './calendarView/item/bookingAppointmentItemRequestBuilder';
import {CustomersRequestBuilder} from './customers/customersRequestBuilder';
import {BookingCustomerBaseItemRequestBuilder} from './customers/item/bookingCustomerBaseItemRequestBuilder';
import {CustomQuestionsRequestBuilder} from './customQuestions/customQuestionsRequestBuilder';
import {BookingCustomQuestionItemRequestBuilder} from './customQuestions/item/bookingCustomQuestionItemRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {BookingServiceItemRequestBuilder} from './services/item/bookingServiceItemRequestBuilder';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {BookingStaffMemberBaseItemRequestBuilder} from './staffMembers/item/bookingStaffMemberBaseItemRequestBuilder';
import {StaffMembersRequestBuilder} from './staffMembers/staffMembersRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the bookingBusinesses property of the microsoft.graph.solutionsRoot entity.  */
export class BookingBusinessItemRequestBuilder {
    /** The appointments property  */
    public get appointments(): AppointmentsRequestBuilder {
        return new AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendarView property  */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The customers property  */
    public get customers(): CustomersRequestBuilder {
        return new CustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The customQuestions property  */
    public get customQuestions(): CustomQuestionsRequestBuilder {
        return new CustomQuestionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The publish property  */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The services property  */
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The staffMembers property  */
    public get staffMembers(): StaffMembersRequestBuilder {
        return new StaffMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unpublish property  */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.appointments.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentItemRequestBuilder
     */
    public appointmentsById(id: string) : i549df13af914f5d18415b6b2e317bb0de2c91be54aaca79fb0e27b0aa2649626 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment_id"] = id
        return new i549df13af914f5d18415b6b2e317bb0de2c91be54aaca79fb0e27b0aa2649626(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentItemRequestBuilder
     */
    public calendarViewById(id: string) : i286c0648ce5b2f5904e9046a9ca0cb117fe36890723bbbf3f391f7bbdb3c085b {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment_id"] = id
        return new i286c0648ce5b2f5904e9046a9ca0cb117fe36890723bbbf3f391f7bbdb3c085b(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BookingBusinessItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Get bookingBusinesses from solutions
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(q);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: BookingBusiness | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.customers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomerBaseItemRequestBuilder
     */
    public customersById(id: string) : BookingCustomerBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomerBase_id"] = id
        return new BookingCustomerBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.customQuestions.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomQuestionItemRequestBuilder
     */
    public customQuestionsById(id: string) : BookingCustomQuestionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomQuestion_id"] = id
        return new BookingCustomQuestionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get bookingBusinesses from solutions
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingBusiness
     */
    public get(queryParameters?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingBusiness | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<BookingBusiness>(requestInfo, createBookingBusinessFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: BookingBusiness | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.services.item collection
     * @param id Unique identifier of the item
     * @returns a bookingServiceItemRequestBuilder
     */
    public servicesById(id: string) : BookingServiceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingService_id"] = id
        return new BookingServiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.staffMembers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingStaffMemberBaseItemRequestBuilder
     */
    public staffMembersById(id: string) : BookingStaffMemberBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingStaffMemberBase_id"] = id
        return new BookingStaffMemberBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
