import {Event} from '../../../../../../../../../event';
import {AcceptRequestBuilder} from '../accept/acceptRequestBuilder';
import {AttachmentsRequestBuilder} from '../attachments/attachmentsRequestBuilder';
import {AttachmentRequestBuilder} from '../attachments/item/item/attachmentRequestBuilder';
import {CalendarRequestBuilder} from '../calendar/calendarRequestBuilder';
import {CancelRequestBuilder} from '../cancel/cancelRequestBuilder';
import {DeclineRequestBuilder} from '../decline/declineRequestBuilder';
import {DismissReminderRequestBuilder} from '../dismissReminder/dismissReminderRequestBuilder';
import {ExtensionsRequestBuilder} from '../extensions/extensionsRequestBuilder';
import {ExtensionRequestBuilder} from '../extensions/item/item/extensionRequestBuilder';
import {ForwardRequestBuilder} from '../forward/forwardRequestBuilder';
import {InstancesRequestBuilder} from '../instances/instancesRequestBuilder';
import {EventRequestBuilder} from '../instances/item/item/eventRequestBuilder';
import {MultiValueLegacyExtendedPropertyRequestBuilder} from '../multiValueExtendedProperties/item/item/multiValueLegacyExtendedPropertyRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from '../multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueLegacyExtendedPropertyRequestBuilder} from '../singleValueExtendedProperties/item/item/singleValueLegacyExtendedPropertyRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from '../singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {SnoozeReminderRequestBuilder} from '../snoozeReminder/snoozeReminderRequestBuilder';
import {TentativelyAcceptRequestBuilder} from '../tentativelyAccept/tentativelyAcceptRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}  */
export class EventRequestBuilder {
    public get accept(): AcceptRequestBuilder {
        return new AcceptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get decline(): DeclineRequestBuilder {
        return new DeclineRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get dismissReminder(): DismissReminderRequestBuilder {
        return new DismissReminderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get forward(): ForwardRequestBuilder {
        return new ForwardRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get instances(): InstancesRequestBuilder {
        return new InstancesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get snoozeReminder(): SnoozeReminderRequestBuilder {
        return new SnoozeReminderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tentativelyAccept(): TentativelyAcceptRequestBuilder {
        return new TentativelyAcceptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.calendarGroups.item.calendars.item.calendarView.item.attachments.item collection
     * @param id Unique identifier of the item
     * @returns a attachmentRequestBuilder
     */
    public attachmentsById(id: String) : AttachmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AttachmentRequestBuilder(this.currentPath + this.pathSegment + "/attachments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new EventRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Event | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.calendarGroups.item.calendars.item.calendarView.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
     */
    public extensionsById(id: String) : ExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Event
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Event | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Event>(requestInfo, Event, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.calendarGroups.item.calendars.item.calendarView.item.instances.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public instancesById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/instances/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.calendarGroups.item.calendars.item.calendarView.item.multiValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a multiValueLegacyExtendedPropertyRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: String) : MultiValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MultiValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/multiValueExtendedProperties/" + id, this.httpCore, false);
    };
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Event | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.calendarGroups.item.calendars.item.calendarView.item.singleValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a singleValueLegacyExtendedPropertyRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: String) : SingleValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SingleValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/singleValueExtendedProperties/" + id, this.httpCore, false);
    };
}
