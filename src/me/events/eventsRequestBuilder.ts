import {EventCollectionResponse} from '../../models/';
import {createEventCollectionResponseFromDiscriminatorValue} from '../../models/createEventCollectionResponseFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from '../../models/createEventFromDiscriminatorValue';
import {deserializeIntoEvent} from '../../models/deserializeIntoEvent';
import {Event} from '../../models/event';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeEvent} from '../../models/serializeEvent';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {EventsRequestBuilderGetRequestConfiguration} from './eventsRequestBuilderGetRequestConfiguration';
import {EventsRequestBuilderPostRequestConfiguration} from './eventsRequestBuilderPostRequestConfiguration';
import {EventItemRequestBuilder} from './item/eventItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the events property of the microsoft.graph.user entity.
 */
export class EventsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the events property of the microsoft.graph.user entity.
     * @param eventId Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public byEventId(eventId: string) : EventItemRequestBuilder {
        if(!eventId) throw new Error("eventId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = eventId
        return new EventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EventsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/events{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of event objects in the user's mailbox. The list contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, or get the instances of an event. Currently, this operation returns event bodies in only HTML format. There are two scenarios where an app can get events in another user's calendar:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EventCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/user-list-events?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EventsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EventCollectionResponse>(requestInfo, createEventCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create an event in the user's default calendar or specified calendar. By default, the **allowNewTimeProposals** property is set to true when an event is created, which means invitees can propose a different date/time for the event. See Propose new meeting times for more information on how to propose a time, and how to receive and accept a new time proposal. You can specify the time zone for each of the start and end times of the event as part of their values, because the **start** and **end** properties are of dateTimeTimeZone type. First find the supported time zones to make sure you set only time zones that have been configured for the user's mailbox server.  When an event is sent, the server sends invitations to all the attendees. **Setting the location in an event** An Exchange administrator can set up a mailbox and an email address for a resource such as a meeting room, or equipment like a projector. Users can then invite the resource as an attendee to a meeting. On behalf of the resource, the server accepts or rejects the meeting request based on the free/busy schedule of the resource. If the server accepts a meeting for the resource, it creates an event for the meeting in the resource's calendar. If the meeting is rescheduled, the server automatically updates the event in the resource's calendar. Another advantage of setting up a mailbox for a resource is to control scheduling of the resource, for example, only executivesor their delegates can book a private meeting room. If you're organizing an event that involves a meeting location: Additionally, if the meeting location has been set up as a resource, or if the event involves some equipment that has been set up as a resource:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Event
     * @see {@link https://docs.microsoft.com/graph/api/user-post-events?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Event | undefined, requestConfiguration?: EventsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Event | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<Event>(requestInfo, createEventFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a list of event objects in the user's mailbox. The list contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, or get the instances of an event. Currently, this operation returns event bodies in only HTML format. There are two scenarios where an app can get events in another user's calendar:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EventsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an event in the user's default calendar or specified calendar. By default, the **allowNewTimeProposals** property is set to true when an event is created, which means invitees can propose a different date/time for the event. See Propose new meeting times for more information on how to propose a time, and how to receive and accept a new time proposal. You can specify the time zone for each of the start and end times of the event as part of their values, because the **start** and **end** properties are of dateTimeTimeZone type. First find the supported time zones to make sure you set only time zones that have been configured for the user's mailbox server.  When an event is sent, the server sends invitations to all the attendees. **Setting the location in an event** An Exchange administrator can set up a mailbox and an email address for a resource such as a meeting room, or equipment like a projector. Users can then invite the resource as an attendee to a meeting. On behalf of the resource, the server accepts or rejects the meeting request based on the free/busy schedule of the resource. If the server accepts a meeting for the resource, it creates an event for the meeting in the resource's calendar. If the meeting is rescheduled, the server automatically updates the event in the resource's calendar. Another advantage of setting up a mailbox for a resource is to control scheduling of the resource, for example, only executivesor their delegates can book a private meeting room. If you're organizing an event that involves a meeting location: Additionally, if the meeting location has been set up as a resource, or if the event involves some equipment that has been set up as a resource:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Event | undefined, requestConfiguration?: EventsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEvent);
        return requestInfo;
    };
}
