import {Schedule} from '../../../../models/';
import {createScheduleFromDiscriminatorValue} from '../../../../models/createScheduleFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {OfferShiftRequestItemRequestBuilder} from './offerShiftRequests/item/offerShiftRequestItemRequestBuilder';
import {OfferShiftRequestsRequestBuilder} from './offerShiftRequests/offerShiftRequestsRequestBuilder';
import {OpenShiftChangeRequestItemRequestBuilder} from './openShiftChangeRequests/item/openShiftChangeRequestItemRequestBuilder';
import {OpenShiftChangeRequestsRequestBuilder} from './openShiftChangeRequests/openShiftChangeRequestsRequestBuilder';
import {OpenShiftItemRequestBuilder} from './openShifts/item/openShiftItemRequestBuilder';
import {OpenShiftsRequestBuilder} from './openShifts/openShiftsRequestBuilder';
import {ScheduleRequestBuilderGetQueryParameters} from './scheduleRequestBuilderGetQueryParameters';
import {SchedulingGroupItemRequestBuilder} from './schedulingGroups/item/schedulingGroupItemRequestBuilder';
import {SchedulingGroupsRequestBuilder} from './schedulingGroups/schedulingGroupsRequestBuilder';
import {ShareRequestBuilder} from './share/shareRequestBuilder';
import {ShiftItemRequestBuilder} from './shifts/item/shiftItemRequestBuilder';
import {ShiftsRequestBuilder} from './shifts/shiftsRequestBuilder';
import {SwapShiftsChangeRequestItemRequestBuilder} from './swapShiftsChangeRequests/item/swapShiftsChangeRequestItemRequestBuilder';
import {SwapShiftsChangeRequestsRequestBuilder} from './swapShiftsChangeRequests/swapShiftsChangeRequestsRequestBuilder';
import {TimeOffReasonItemRequestBuilder} from './timeOffReasons/item/timeOffReasonItemRequestBuilder';
import {TimeOffReasonsRequestBuilder} from './timeOffReasons/timeOffReasonsRequestBuilder';
import {TimeOffRequestItemRequestBuilder} from './timeOffRequests/item/timeOffRequestItemRequestBuilder';
import {TimeOffRequestsRequestBuilder} from './timeOffRequests/timeOffRequestsRequestBuilder';
import {TimeOffItemRequestBuilder} from './timesOff/item/timeOffItemRequestBuilder';
import {TimesOffRequestBuilder} from './timesOff/timesOffRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the schedule property of the microsoft.graph.team entity.  */
export class ScheduleRequestBuilder {
    /** The offerShiftRequests property  */
    public get offerShiftRequests(): OfferShiftRequestsRequestBuilder {
        return new OfferShiftRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The openShiftChangeRequests property  */
    public get openShiftChangeRequests(): OpenShiftChangeRequestsRequestBuilder {
        return new OpenShiftChangeRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The openShifts property  */
    public get openShifts(): OpenShiftsRequestBuilder {
        return new OpenShiftsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The schedulingGroups property  */
    public get schedulingGroups(): SchedulingGroupsRequestBuilder {
        return new SchedulingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The share property  */
    public get share(): ShareRequestBuilder {
        return new ShareRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The shifts property  */
    public get shifts(): ShiftsRequestBuilder {
        return new ShiftsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The swapShiftsChangeRequests property  */
    public get swapShiftsChangeRequests(): SwapShiftsChangeRequestsRequestBuilder {
        return new SwapShiftsChangeRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The timeOffReasons property  */
    public get timeOffReasons(): TimeOffReasonsRequestBuilder {
        return new TimeOffReasonsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The timeOffRequests property  */
    public get timeOffRequests(): TimeOffRequestsRequestBuilder {
        return new TimeOffRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The timesOff property  */
    public get timesOff(): TimesOffRequestBuilder {
        return new TimesOffRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ScheduleRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/joinedTeams/{team%2Did}/schedule{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property schedule for me
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * The schedule of shifts for this team.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: ScheduleRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property schedule in me
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Schedule | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete navigation property schedule for me
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The schedule of shifts for this team.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Schedule
     */
    public get(queryParameters?: ScheduleRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Schedule | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Schedule>(requestInfo, createScheduleFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.offerShiftRequests.item collection
     * @param id Unique identifier of the item
     * @returns a offerShiftRequestItemRequestBuilder
     */
    public offerShiftRequestsById(id: string) : OfferShiftRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["offerShiftRequest%2Did"] = id
        return new OfferShiftRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.openShiftChangeRequests.item collection
     * @param id Unique identifier of the item
     * @returns a openShiftChangeRequestItemRequestBuilder
     */
    public openShiftChangeRequestsById(id: string) : OpenShiftChangeRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShiftChangeRequest%2Did"] = id
        return new OpenShiftChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.openShifts.item collection
     * @param id Unique identifier of the item
     * @returns a openShiftItemRequestBuilder
     */
    public openShiftsById(id: string) : OpenShiftItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShift%2Did"] = id
        return new OpenShiftItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property schedule in me
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Schedule | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.schedulingGroups.item collection
     * @param id Unique identifier of the item
     * @returns a schedulingGroupItemRequestBuilder
     */
    public schedulingGroupsById(id: string) : SchedulingGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schedulingGroup%2Did"] = id
        return new SchedulingGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.shifts.item collection
     * @param id Unique identifier of the item
     * @returns a shiftItemRequestBuilder
     */
    public shiftsById(id: string) : ShiftItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["shift%2Did"] = id
        return new ShiftItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.swapShiftsChangeRequests.item collection
     * @param id Unique identifier of the item
     * @returns a swapShiftsChangeRequestItemRequestBuilder
     */
    public swapShiftsChangeRequestsById(id: string) : SwapShiftsChangeRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["swapShiftsChangeRequest%2Did"] = id
        return new SwapShiftsChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.timeOffReasons.item collection
     * @param id Unique identifier of the item
     * @returns a timeOffReasonItemRequestBuilder
     */
    public timeOffReasonsById(id: string) : TimeOffReasonItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffReason%2Did"] = id
        return new TimeOffReasonItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.timeOffRequests.item collection
     * @param id Unique identifier of the item
     * @returns a timeOffRequestItemRequestBuilder
     */
    public timeOffRequestsById(id: string) : TimeOffRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffRequest%2Did"] = id
        return new TimeOffRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item.schedule.timesOff.item collection
     * @param id Unique identifier of the item
     * @returns a timeOffItemRequestBuilder
     */
    public timesOffById(id: string) : TimeOffItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOff%2Did"] = id
        return new TimeOffItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
