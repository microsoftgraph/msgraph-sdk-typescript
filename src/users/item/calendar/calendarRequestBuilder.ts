import {Calendar} from '../../../models/';
import {createCalendarFromDiscriminatorValue} from '../../../models/createCalendarFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllowedCalendarSharingRolesWithUserRequestBuilder} from './allowedCalendarSharingRolesWithUser/allowedCalendarSharingRolesWithUserRequestBuilder';
import {CalendarPermissionsRequestBuilder} from './calendarPermissions/calendarPermissionsRequestBuilder';
import {CalendarRequestBuilderGetRequestConfiguration} from './calendarRequestBuilderGetRequestConfiguration';
import {CalendarRequestBuilderPatchRequestConfiguration} from './calendarRequestBuilderPatchRequestConfiguration';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {GetScheduleRequestBuilder} from './getSchedule/getScheduleRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from './multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from './singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendar property of the microsoft.graph.user entity.
 */
export class CalendarRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity. */
    public get calendarPermissions(): CalendarPermissionsRequestBuilder {
        return new CalendarPermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendarView property of the microsoft.graph.calendar entity. */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the events property of the microsoft.graph.calendar entity. */
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getSchedule method. */
    public get getSchedule(): GetScheduleRequestBuilder {
        return new GetScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.calendar entity. */
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.calendar entity. */
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the allowedCalendarSharingRoles method.
     * @param User Usage: User='{User}'
     * @returns a allowedCalendarSharingRolesWithUserRequestBuilder
     */
    public allowedCalendarSharingRolesWithUser(user: string | undefined) : AllowedCalendarSharingRolesWithUserRequestBuilder {
        if(!user) throw new Error("user cannot be undefined");
        return new AllowedCalendarSharingRolesWithUserRequestBuilder(this.pathParameters, this.requestAdapter, user);
    };
    /**
     * Instantiates a new CalendarRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/calendar{?%24select}");
    };
    /**
     * The user's primary calendar. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public get(requestConfiguration?: CalendarRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Calendar>(requestInfo, createCalendarFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property calendar in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public patch(body: Calendar | undefined, requestConfiguration?: CalendarRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Calendar>(requestInfo, createCalendarFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The user's primary calendar. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property calendar in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Calendar | undefined, requestConfiguration?: CalendarRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
