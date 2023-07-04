import {CalendarPermissionCollectionResponse} from '../../../models/';
import {CalendarPermission} from '../../../models/calendarPermission';
import {createCalendarPermissionCollectionResponseFromDiscriminatorValue} from '../../../models/createCalendarPermissionCollectionResponseFromDiscriminatorValue';
import {createCalendarPermissionFromDiscriminatorValue} from '../../../models/createCalendarPermissionFromDiscriminatorValue';
import {deserializeIntoCalendarPermission} from '../../../models/deserializeIntoCalendarPermission';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeCalendarPermission} from '../../../models/serializeCalendarPermission';
import {CalendarPermissionsRequestBuilderGetRequestConfiguration} from './calendarPermissionsRequestBuilderGetRequestConfiguration';
import {CalendarPermissionsRequestBuilderPostRequestConfiguration} from './calendarPermissionsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CalendarPermissionItemRequestBuilder} from './item/calendarPermissionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
 */
export class CalendarPermissionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
     * @param calendarPermissionId Unique identifier of the item
     * @returns a CalendarPermissionItemRequestBuilder
     */
    public byCalendarPermissionId(calendarPermissionId: string) : CalendarPermissionItemRequestBuilder {
        if(!calendarPermissionId) throw new Error("calendarPermissionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarPermission%2Did"] = calendarPermissionId
        return new CalendarPermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarPermissionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendar/calendarPermissions{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get a collection of calendarPermission resources that describe the identity and roles of users with whom the specified calendar has been shared or delegated. Here, the calendar can be a user calendar or group calendar.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarPermissionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/calendar-list-calendarpermissions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CalendarPermissionsRequestBuilderGetRequestConfiguration | undefined) : Promise<CalendarPermissionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarPermissionCollectionResponse>(requestInfo, createCalendarPermissionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarPermission
     * @see {@link https://docs.microsoft.com/graph/api/calendar-post-calendarpermissions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CalendarPermission | undefined, requestConfiguration?: CalendarPermissionsRequestBuilderPostRequestConfiguration | undefined) : Promise<CalendarPermission | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarPermission>(requestInfo, createCalendarPermissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a collection of calendarPermission resources that describe the identity and roles of users with whom the specified calendar has been shared or delegated. Here, the calendar can be a user calendar or group calendar.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarPermissionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CalendarPermission | undefined, requestConfiguration?: CalendarPermissionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCalendarPermission);
        return requestInfo;
    };
}
