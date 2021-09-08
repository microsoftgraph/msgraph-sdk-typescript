import {Schedule} from '../../schedule';
import {OfferShiftRequestRequestBuilder} from './offerShiftRequests/item/offerShiftRequestRequestBuilder';
import {OfferShiftRequestsRequestBuilder} from './offerShiftRequests/offerShiftRequestsRequestBuilder';
import {OpenShiftChangeRequestRequestBuilder} from './openShiftChangeRequests/item/openShiftChangeRequestRequestBuilder';
import {OpenShiftChangeRequestsRequestBuilder} from './openShiftChangeRequests/openShiftChangeRequestsRequestBuilder';
import {OpenShiftRequestBuilder} from './openShifts/item/openShiftRequestBuilder';
import {OpenShiftsRequestBuilder} from './openShifts/openShiftsRequestBuilder';
import {SchedulingGroupRequestBuilder} from './schedulingGroups/item/schedulingGroupRequestBuilder';
import {SchedulingGroupsRequestBuilder} from './schedulingGroups/schedulingGroupsRequestBuilder';
import {ShareRequestBuilder} from './share/shareRequestBuilder';
import {ShiftRequestBuilder} from './shifts/item/shiftRequestBuilder';
import {ShiftsRequestBuilder} from './shifts/shiftsRequestBuilder';
import {SwapShiftsChangeRequestRequestBuilder} from './swapShiftsChangeRequests/item/swapShiftsChangeRequestRequestBuilder';
import {SwapShiftsChangeRequestsRequestBuilder} from './swapShiftsChangeRequests/swapShiftsChangeRequestsRequestBuilder';
import {TimeOffReasonRequestBuilder} from './timeOffReasons/item/timeOffReasonRequestBuilder';
import {TimeOffReasonsRequestBuilder} from './timeOffReasons/timeOffReasonsRequestBuilder';
import {TimeOffRequestRequestBuilder} from './timeOffRequests/item/timeOffRequestRequestBuilder';
import {TimeOffRequestsRequestBuilder} from './timeOffRequests/timeOffRequestsRequestBuilder';
import {TimeOffRequestBuilder} from './timesOff/item/timeOffRequestBuilder';
import {TimesOffRequestBuilder} from './timesOff/timesOffRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /teams/{team-id}/schedule  */
export class ScheduleRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get offerShiftRequests(): OfferShiftRequestsRequestBuilder {
        return new OfferShiftRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get openShiftChangeRequests(): OpenShiftChangeRequestsRequestBuilder {
        return new OpenShiftChangeRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get openShifts(): OpenShiftsRequestBuilder {
        return new OpenShiftsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get schedulingGroups(): SchedulingGroupsRequestBuilder {
        return new SchedulingGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get share(): ShareRequestBuilder {
        return new ShareRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get shifts(): ShiftsRequestBuilder {
        return new ShiftsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get swapShiftsChangeRequests(): SwapShiftsChangeRequestsRequestBuilder {
        return new SwapShiftsChangeRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get timeOffReasons(): TimeOffReasonsRequestBuilder {
        return new TimeOffReasonsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get timeOffRequests(): TimeOffRequestsRequestBuilder {
        return new TimeOffRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get timesOff(): TimesOffRequestBuilder {
        return new TimesOffRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new ScheduleRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/schedule";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * The schedule of shifts for this team.
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
     * The schedule of shifts for this team.
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
     * The schedule of shifts for this team.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Schedule | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The schedule of shifts for this team.
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
     * The schedule of shifts for this team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Schedule
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Schedule | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Schedule>(requestInfo, Schedule, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.offerShiftRequests collection
     * @param id Unique identifier of the item
     * @returns a offerShiftRequestRequestBuilder
     */
    public offerShiftRequestsById(id: String) : OfferShiftRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OfferShiftRequestRequestBuilder(this.currentPath + this.pathSegment + "/offerShiftRequests/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.openShiftChangeRequests collection
     * @param id Unique identifier of the item
     * @returns a openShiftChangeRequestRequestBuilder
     */
    public openShiftChangeRequestsById(id: String) : OpenShiftChangeRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OpenShiftChangeRequestRequestBuilder(this.currentPath + this.pathSegment + "/openShiftChangeRequests/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.openShifts collection
     * @param id Unique identifier of the item
     * @returns a openShiftRequestBuilder
     */
    public openShiftsById(id: String) : OpenShiftRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OpenShiftRequestBuilder(this.currentPath + this.pathSegment + "/openShifts/" + id, this.httpCore, false);
    };
    /**
     * The schedule of shifts for this team.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Schedule | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.schedulingGroups collection
     * @param id Unique identifier of the item
     * @returns a schedulingGroupRequestBuilder
     */
    public schedulingGroupsById(id: String) : SchedulingGroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SchedulingGroupRequestBuilder(this.currentPath + this.pathSegment + "/schedulingGroups/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.shifts collection
     * @param id Unique identifier of the item
     * @returns a shiftRequestBuilder
     */
    public shiftsById(id: String) : ShiftRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ShiftRequestBuilder(this.currentPath + this.pathSegment + "/shifts/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.swapShiftsChangeRequests collection
     * @param id Unique identifier of the item
     * @returns a swapShiftsChangeRequestRequestBuilder
     */
    public swapShiftsChangeRequestsById(id: String) : SwapShiftsChangeRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SwapShiftsChangeRequestRequestBuilder(this.currentPath + this.pathSegment + "/swapShiftsChangeRequests/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.timeOffReasons collection
     * @param id Unique identifier of the item
     * @returns a timeOffReasonRequestBuilder
     */
    public timeOffReasonsById(id: String) : TimeOffReasonRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TimeOffReasonRequestBuilder(this.currentPath + this.pathSegment + "/timeOffReasons/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.timeOffRequests collection
     * @param id Unique identifier of the item
     * @returns a timeOffRequestRequestBuilder
     */
    public timeOffRequestsById(id: String) : TimeOffRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TimeOffRequestRequestBuilder(this.currentPath + this.pathSegment + "/timeOffRequests/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.schedule.timesOff collection
     * @param id Unique identifier of the item
     * @returns a timeOffRequestBuilder
     */
    public timesOffById(id: String) : TimeOffRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TimeOffRequestBuilder(this.currentPath + this.pathSegment + "/timesOff/" + id, this.httpCore, false);
    };
}
