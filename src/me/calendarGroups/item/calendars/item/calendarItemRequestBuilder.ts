import {Calendar} from '../../../../../models/';
import {createCalendarFromDiscriminatorValue} from '../../../../../models/createCalendarFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CalendarItemRequestBuilderDeleteRequestConfiguration} from './calendarItemRequestBuilderDeleteRequestConfiguration';
import {CalendarItemRequestBuilderGetRequestConfiguration} from './calendarItemRequestBuilderGetRequestConfiguration';
import {CalendarItemRequestBuilderPatchRequestConfiguration} from './calendarItemRequestBuilderPatchRequestConfiguration';
import {CalendarPermissionsRequestBuilder} from './calendarPermissions/calendarPermissionsRequestBuilder';
import {CalendarPermissionItemRequestBuilder} from './calendarPermissions/item/calendarPermissionItemRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventItemRequestBuilder as I159d499e2bca7a6fb8d98e39269bf28e22d02bdad0a346b0a25d336d3b78faea} from './calendarView/item/eventItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as I45b6cdd1f543555f5e80e718ccf5b92eda2904ddb75cb7287c9fbd05c34ff2c4} from './events/item/eventItemRequestBuilder';
import {MicrosoftGraphAllowedCalendarSharingRolesWithUserRequestBuilder} from './microsoftGraphAllowedCalendarSharingRolesWithUser/microsoftGraphAllowedCalendarSharingRolesWithUserRequestBuilder';
import {MicrosoftGraphGetScheduleRequestBuilder} from './microsoftGraphGetSchedule/microsoftGraphGetScheduleRequestBuilder';
import {MultiValueLegacyExtendedPropertyItemRequestBuilder} from './multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyItemRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from './multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueLegacyExtendedPropertyItemRequestBuilder} from './singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyItemRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from './singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity.
 */
export class CalendarItemRequestBuilder {
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
    public get microsoftGraphGetSchedule(): MicrosoftGraphGetScheduleRequestBuilder {
        return new MicrosoftGraphGetScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.calendar entity. */
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.calendar entity. */
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a CalendarPermissionItemRequestBuilder
     */
    public calendarPermissionsById(id: string) : CalendarPermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarPermission%2Did"] = id
        return new CalendarPermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public calendarViewById(id: string) : I159d499e2bca7a6fb8d98e39269bf28e22d02bdad0a346b0a25d336d3b78faea {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new I159d499e2bca7a6fb8d98e39269bf28e22d02bdad0a346b0a25d336d3b78faea(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/calendarGroups/{calendarGroup%2Did}/calendars/{calendar%2Did}{?%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property calendars for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CalendarItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the events property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public eventsById(id: string) : I45b6cdd1f543555f5e80e718ccf5b92eda2904ddb75cb7287c9fbd05c34ff2c4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new I45b6cdd1f543555f5e80e718ccf5b92eda2904ddb75cb7287c9fbd05c34ff2c4(urlTplParams, this.requestAdapter);
    };
    /**
     * The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public get(requestConfiguration?: CalendarItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
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
     * Provides operations to call the allowedCalendarSharingRoles method.
     * @param User Usage: User='{User}'
     * @returns a microsoftGraphAllowedCalendarSharingRolesWithUserRequestBuilder
     */
    public microsoftGraphAllowedCalendarSharingRolesWithUser(user: string | undefined) : MicrosoftGraphAllowedCalendarSharingRolesWithUserRequestBuilder {
        if(!user) throw new Error("user cannot be undefined");
        return new MicrosoftGraphAllowedCalendarSharingRolesWithUserRequestBuilder(this.pathParameters, this.requestAdapter, user);
    };
    /**
     * Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyItemRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: string) : MultiValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty%2Did"] = id
        return new MultiValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property calendars in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public patch(body: Calendar | undefined, requestConfiguration?: CalendarItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
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
     * Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyItemRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: string) : SingleValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["singleValueLegacyExtendedProperty%2Did"] = id
        return new SingleValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property calendars for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CalendarItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property calendars in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Calendar | undefined, requestConfiguration?: CalendarItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
