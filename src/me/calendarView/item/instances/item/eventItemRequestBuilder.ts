import { type Event } from '../../../../../models/';
import { createEventFromDiscriminatorValue } from '../../../../../models/event';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { AcceptRequestBuilder } from './accept/acceptRequestBuilder';
import { AttachmentsRequestBuilder } from './attachments/attachmentsRequestBuilder';
import { CalendarRequestBuilder } from './calendar/calendarRequestBuilder';
import { CancelRequestBuilder } from './cancel/cancelRequestBuilder';
import { DeclineRequestBuilder } from './decline/declineRequestBuilder';
import { DismissReminderRequestBuilder } from './dismissReminder/dismissReminderRequestBuilder';
import { ExtensionsRequestBuilder } from './extensions/extensionsRequestBuilder';
import { ForwardRequestBuilder } from './forward/forwardRequestBuilder';
import { SnoozeReminderRequestBuilder } from './snoozeReminder/snoozeReminderRequestBuilder';
import { TentativelyAcceptRequestBuilder } from './tentativelyAccept/tentativelyAcceptRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface EventItemRequestBuilderGetQueryParameters {
    /**
     * The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00
     */
    endDateTime?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00
     */
    startDateTime?: string;
}
export interface EventItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: EventItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the instances property of the microsoft.graph.event entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendarView/{event%2Did}/instances/{event%2Did1}{?startDateTime*,endDateTime*,%24select}");
    };
    /**
     * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
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
     * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a EventItemRequestBuilder
     */
    public withUrl(rawUrl: string) : EventItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EventItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
