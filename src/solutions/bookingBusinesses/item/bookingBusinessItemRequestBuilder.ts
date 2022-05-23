import {BookingBusinessImpl} from '../../../models/';
import {BookingBusiness} from '../../../models/bookingBusiness';
import {createBookingBusinessFromDiscriminatorValue} from '../../../models/createBookingBusinessFromDiscriminatorValue';
import {ODataErrorImpl} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AppointmentsRequestBuilder} from './appointments/appointmentsRequestBuilder';
import {BookingAppointmentItemRequestBuilder as i1239abbd4fb7cc5796031c837e834700746753fc5f5d2b890701693c87335be1} from './appointments/item/bookingAppointmentItemRequestBuilder';
import {BookingBusinessItemRequestBuilderDeleteRequestConfiguration} from './bookingBusinessItemRequestBuilderDeleteRequestConfiguration';
import {BookingBusinessItemRequestBuilderGetRequestConfiguration} from './bookingBusinessItemRequestBuilderGetRequestConfiguration';
import {BookingBusinessItemRequestBuilderPatchRequestConfiguration} from './bookingBusinessItemRequestBuilderPatchRequestConfiguration';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {BookingAppointmentItemRequestBuilder as ib14200d56dfe9e0746327f9bb1b9ed401728441d149cf4643765f62cae3a71f8} from './calendarView/item/bookingAppointmentItemRequestBuilder';
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

/** Provides operations to manage the bookingBusinesses property of the microsoft.graph.solutionsRoot entity. */
export class BookingBusinessItemRequestBuilder {
    /** The appointments property */
    public get appointments(): AppointmentsRequestBuilder {
        return new AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendarView property */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The customers property */
    public get customers(): CustomersRequestBuilder {
        return new CustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The customQuestions property */
    public get customQuestions(): CustomQuestionsRequestBuilder {
        return new CustomQuestionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The publish property */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The services property */
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The staffMembers property */
    public get staffMembers(): StaffMembersRequestBuilder {
        return new StaffMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unpublish property */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.appointments.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentItemRequestBuilder
     */
    public appointmentsById(id: string) : i1239abbd4fb7cc5796031c837e834700746753fc5f5d2b890701693c87335be1 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment%2Did"] = id
        return new i1239abbd4fb7cc5796031c837e834700746753fc5f5d2b890701693c87335be1(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentItemRequestBuilder
     */
    public calendarViewById(id: string) : ib14200d56dfe9e0746327f9bb1b9ed401728441d149cf4643765f62cae3a71f8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment%2Did"] = id
        return new ib14200d56dfe9e0746327f9bb1b9ed401728441d149cf4643765f62cae3a71f8(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BookingBusinessItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: BookingBusinessItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get bookingBusinesses from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: BookingBusinessItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: BookingBusiness | undefined, requestConfiguration?: BookingBusinessItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new BookingBusinessImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.customers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomerBaseItemRequestBuilder
     */
    public customersById(id: string) : BookingCustomerBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomerBase%2Did"] = id
        return new BookingCustomerBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.customQuestions.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomQuestionItemRequestBuilder
     */
    public customQuestionsById(id: string) : BookingCustomQuestionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomQuestion%2Did"] = id
        return new BookingCustomQuestionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: BookingBusinessItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get bookingBusinesses from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingBusiness
     */
    public get(requestConfiguration?: BookingBusinessItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingBusinessImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<BookingBusinessImpl>(requestInfo, createBookingBusinessFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: BookingBusiness | undefined, requestConfiguration?: BookingBusinessItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.services.item collection
     * @param id Unique identifier of the item
     * @returns a bookingServiceItemRequestBuilder
     */
    public servicesById(id: string) : BookingServiceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingService%2Did"] = id
        return new BookingServiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.staffMembers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingStaffMemberBaseItemRequestBuilder
     */
    public staffMembersById(id: string) : BookingStaffMemberBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingStaffMemberBase%2Did"] = id
        return new BookingStaffMemberBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
