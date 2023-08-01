import {EventCollectionResponse} from '../../../models/';
import {createEventCollectionResponseFromDiscriminatorValue} from '../../../models/createEventCollectionResponseFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from '../../../models/createEventFromDiscriminatorValue';
import {deserializeIntoEvent} from '../../../models/deserializeIntoEvent';
import type {Event} from '../../../models/event';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeEvent} from '../../../models/serializeEvent';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {EventsRequestBuilderGetRequestConfiguration} from './eventsRequestBuilderGetRequestConfiguration';
import {EventsRequestBuilderPostRequestConfiguration} from './eventsRequestBuilderPostRequestConfiguration';
import {EventItemRequestBuilder} from './item/eventItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/events{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of event objects in the user's mailbox. The list contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, or get the instances of an event. Currently, this operation returns event bodies in only HTML format. There are two scenarios where an app can get events in another user's calendar:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EventCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-events?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EventsRequestBuilderGetRequestConfiguration | undefined) : Promise<EventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EventCollectionResponse>(requestInfo, createEventCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create one or more single-value extended properties in a new or existing instance of a resource. The following user resources are supported: As well as the following group resources: See Extended properties overview for more information about when to useopen extensions or extended properties, and how to specify extended properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Event
     * @see {@link https://learn.microsoft.com/graph/api/singlevaluelegacyextendedproperty-post-singlevalueextendedproperties?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Event | undefined, requestConfiguration?: EventsRequestBuilderPostRequestConfiguration | undefined) : Promise<Event | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Event>(requestInfo, createEventFromDiscriminatorValue, errorMapping);
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
     * Create one or more single-value extended properties in a new or existing instance of a resource. The following user resources are supported: As well as the following group resources: See Extended properties overview for more information about when to useopen extensions or extended properties, and how to specify extended properties.
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
