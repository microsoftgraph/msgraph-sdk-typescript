import {BookingBusiness} from '../../../models/microsoft/graph/bookingBusiness';
import {AppointmentsRequestBuilder} from './appointments/appointmentsRequestBuilder';
import {BookingAppointmentRequestBuilder as i997ccbf7bb5289987c0ea2a9d877c922c2dde4dae2f168d974bfa5ec6c77d457} from './appointments/item/bookingAppointmentRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {BookingAppointmentRequestBuilder as i39a3bd2acc0d7d300ef61cc0dd9f73c0c10e44dc1d967351af1f548071ea7a42} from './calendarView/item/bookingAppointmentRequestBuilder';
import {CustomersRequestBuilder} from './customers/customersRequestBuilder';
import {BookingCustomerBaseRequestBuilder} from './customers/item/bookingCustomerBaseRequestBuilder';
import {CustomQuestionsRequestBuilder} from './customQuestions/customQuestionsRequestBuilder';
import {BookingCustomQuestionRequestBuilder} from './customQuestions/item/bookingCustomQuestionRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {BookingServiceRequestBuilder} from './services/item/bookingServiceRequestBuilder';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {BookingStaffMemberBaseRequestBuilder} from './staffMembers/item/bookingStaffMemberBaseRequestBuilder';
import {StaffMembersRequestBuilder} from './staffMembers/staffMembersRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /solutions/bookingBusinesses/{bookingBusiness-id}  */
export class BookingBusinessRequestBuilder {
    public get appointments(): AppointmentsRequestBuilder {
        return new AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get customers(): CustomersRequestBuilder {
        return new CustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get customQuestions(): CustomQuestionsRequestBuilder {
        return new CustomQuestionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get staffMembers(): StaffMembersRequestBuilder {
        return new StaffMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.appointments.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentRequestBuilder
     */
    public appointmentsById(id: string) : i997ccbf7bb5289987c0ea2a9d877c922c2dde4dae2f168d974bfa5ec6c77d457 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("bookingAppointment_id", id);
        return new i997ccbf7bb5289987c0ea2a9d877c922c2dde4dae2f168d974bfa5ec6c77d457(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentRequestBuilder
     */
    public calendarViewById(id: string) : i39a3bd2acc0d7d300ef61cc0dd9f73c0c10e44dc1d967351af1f548071ea7a42 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("bookingAppointment_id", id);
        return new i39a3bd2acc0d7d300ef61cc0dd9f73c0c10e44dc1d967351af1f548071ea7a42(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BookingBusinessRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get bookingBusinesses from solutions
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: BookingBusiness | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.customers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomerBaseRequestBuilder
     */
    public customersById(id: string) : BookingCustomerBaseRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("bookingCustomerBase_id", id);
        return new BookingCustomerBaseRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.customQuestions.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomQuestionRequestBuilder
     */
    public customQuestionsById(id: string) : BookingCustomQuestionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("bookingCustomQuestion_id", id);
        return new BookingCustomQuestionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get bookingBusinesses from solutions
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingBusiness
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingBusiness | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<BookingBusiness>(requestInfo, BookingBusiness, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: BookingBusiness | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.services.item collection
     * @param id Unique identifier of the item
     * @returns a bookingServiceRequestBuilder
     */
    public servicesById(id: string) : BookingServiceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("bookingService_id", id);
        return new BookingServiceRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.solutions.bookingBusinesses.item.staffMembers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingStaffMemberBaseRequestBuilder
     */
    public staffMembersById(id: string) : BookingStaffMemberBaseRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("bookingStaffMemberBase_id", id);
        return new BookingStaffMemberBaseRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
