import { type CalendarGroup } from '../../../../models/calendarGroup';
import { createCalendarGroupFromDiscriminatorValue } from '../../../../models/createCalendarGroupFromDiscriminatorValue';
import { deserializeIntoCalendarGroup } from '../../../../models/deserializeIntoCalendarGroup';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeCalendarGroup } from '../../../../models/serializeCalendarGroup';
import { type CalendarGroupItemRequestBuilderDeleteRequestConfiguration } from './calendarGroupItemRequestBuilderDeleteRequestConfiguration';
import { type CalendarGroupItemRequestBuilderGetRequestConfiguration } from './calendarGroupItemRequestBuilderGetRequestConfiguration';
import { type CalendarGroupItemRequestBuilderPatchRequestConfiguration } from './calendarGroupItemRequestBuilderPatchRequestConfiguration';
import { CalendarsRequestBuilder } from './calendars/calendarsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendarGroups property of the microsoft.graph.user entity.
 */
export class CalendarGroupItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity.
     */
    public get calendars(): CalendarsRequestBuilder {
        return new CalendarsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CalendarGroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/calendarGroups/{calendarGroup%2Did}{?%24select}");
    };
    /**
     * Delete a calendar group other than the default calendar group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/calendargroup-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: CalendarGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a calendar group object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarGroup
     * @see {@link https://learn.microsoft.com/graph/api/calendargroup-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CalendarGroupItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CalendarGroup | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarGroup>(requestInfo, createCalendarGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of calendargroup object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarGroup
     * @see {@link https://learn.microsoft.com/graph/api/calendargroup-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: CalendarGroup, requestConfiguration?: CalendarGroupItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CalendarGroup | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarGroup>(requestInfo, createCalendarGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a calendar group other than the default calendar group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CalendarGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a calendar group object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarGroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of calendargroup object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CalendarGroup, requestConfiguration?: CalendarGroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCalendarGroup);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a CalendarGroupItemRequestBuilder
     */
    public withUrl(rawUrl: string) : CalendarGroupItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CalendarGroupItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
