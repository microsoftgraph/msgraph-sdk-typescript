import { createEventFromDiscriminatorValue } from '../../../../../../../models/createEventFromDiscriminatorValue';
import { deserializeIntoEvent } from '../../../../../../../models/deserializeIntoEvent';
import { type Event } from '../../../../../../../models/event';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { serializeEvent } from '../../../../../../../models/serializeEvent';
import { AcceptRequestBuilder } from './accept/acceptRequestBuilder';
import { AttachmentsRequestBuilder } from './attachments/attachmentsRequestBuilder';
import { CalendarRequestBuilder } from './calendar/calendarRequestBuilder';
import { CancelRequestBuilder } from './cancel/cancelRequestBuilder';
import { DeclineRequestBuilder } from './decline/declineRequestBuilder';
import { DismissReminderRequestBuilder } from './dismissReminder/dismissReminderRequestBuilder';
import { type EventItemRequestBuilderDeleteRequestConfiguration } from './eventItemRequestBuilderDeleteRequestConfiguration';
import { type EventItemRequestBuilderGetRequestConfiguration } from './eventItemRequestBuilderGetRequestConfiguration';
import { type EventItemRequestBuilderPatchRequestConfiguration } from './eventItemRequestBuilderPatchRequestConfiguration';
import { ExtensionsRequestBuilder } from './extensions/extensionsRequestBuilder';
import { ForwardRequestBuilder } from './forward/forwardRequestBuilder';
import { InstancesRequestBuilder } from './instances/instancesRequestBuilder';
import { SnoozeReminderRequestBuilder } from './snoozeReminder/snoozeReminderRequestBuilder';
import { TentativelyAcceptRequestBuilder } from './tentativelyAccept/tentativelyAcceptRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the events property of the microsoft.graph.calendar entity.
 */
export class EventItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the accept method.
     */
    public get accept(): AcceptRequestBuilder {
        return new AcceptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attachments property of the microsoft.graph.event entity.
     */
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calendar property of the microsoft.graph.event entity.
     */
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cancel method.
     */
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the decline method.
     */
    public get decline(): DeclineRequestBuilder {
        return new DeclineRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dismissReminder method.
     */
    public get dismissReminder(): DismissReminderRequestBuilder {
        return new DismissReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.event entity.
     */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the forward method.
     */
    public get forward(): ForwardRequestBuilder {
        return new ForwardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the instances property of the microsoft.graph.event entity.
     */
    public get instances(): InstancesRequestBuilder {
        return new InstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the snoozeReminder method.
     */
    public get snoozeReminder(): SnoozeReminderRequestBuilder {
        return new SnoozeReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the tentativelyAccept method.
     */
    public get tentativelyAccept(): TentativelyAcceptRequestBuilder {
        return new TentativelyAcceptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EventItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendarGroups/{calendarGroup%2Did}/calendars/{calendar%2Did}/events/{event%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property events for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EventItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The events in the calendar. Navigation property. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Event
     */
    public get(requestConfiguration?: EventItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Event | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Event>(requestInfo, createEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update an event object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Event
     * @see {@link https://learn.microsoft.com/graph/api/group-update-event?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Event, requestConfiguration?: EventItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Event | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Event>(requestInfo, createEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property events for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EventItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The events in the calendar. Navigation property. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EventItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update an event object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Event, requestConfiguration?: EventItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEvent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a EventItemRequestBuilder
     */
    public withUrl(rawUrl: string) : EventItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EventItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
