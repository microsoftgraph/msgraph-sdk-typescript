import {Schedule} from '../../../../models/';
import {createScheduleFromDiscriminatorValue} from '../../../../models/createScheduleFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ShareRequestBuilder} from './microsoftGraphShare/shareRequestBuilder';
import {OfferShiftRequestItemRequestBuilder} from './offerShiftRequests/item/offerShiftRequestItemRequestBuilder';
import {OfferShiftRequestsRequestBuilder} from './offerShiftRequests/offerShiftRequestsRequestBuilder';
import {OpenShiftChangeRequestItemRequestBuilder} from './openShiftChangeRequests/item/openShiftChangeRequestItemRequestBuilder';
import {OpenShiftChangeRequestsRequestBuilder} from './openShiftChangeRequests/openShiftChangeRequestsRequestBuilder';
import {OpenShiftItemRequestBuilder} from './openShifts/item/openShiftItemRequestBuilder';
import {OpenShiftsRequestBuilder} from './openShifts/openShiftsRequestBuilder';
import {ScheduleRequestBuilderDeleteRequestConfiguration} from './scheduleRequestBuilderDeleteRequestConfiguration';
import {ScheduleRequestBuilderGetRequestConfiguration} from './scheduleRequestBuilderGetRequestConfiguration';
import {ScheduleRequestBuilderPutRequestConfiguration} from './scheduleRequestBuilderPutRequestConfiguration';
import {SchedulingGroupItemRequestBuilder} from './schedulingGroups/item/schedulingGroupItemRequestBuilder';
import {SchedulingGroupsRequestBuilder} from './schedulingGroups/schedulingGroupsRequestBuilder';
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

/**
 * Provides operations to manage the schedule property of the microsoft.graph.team entity.
 */
export class ScheduleRequestBuilder {
    /** Provides operations to call the share method. */
    public get microsoftGraphShare(): ShareRequestBuilder {
        return new ShareRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the offerShiftRequests property of the microsoft.graph.schedule entity. */
    public get offerShiftRequests(): OfferShiftRequestsRequestBuilder {
        return new OfferShiftRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity. */
    public get openShiftChangeRequests(): OpenShiftChangeRequestsRequestBuilder {
        return new OpenShiftChangeRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the openShifts property of the microsoft.graph.schedule entity. */
    public get openShifts(): OpenShiftsRequestBuilder {
        return new OpenShiftsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity. */
    public get schedulingGroups(): SchedulingGroupsRequestBuilder {
        return new SchedulingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the shifts property of the microsoft.graph.schedule entity. */
    public get shifts(): ShiftsRequestBuilder {
        return new ShiftsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity. */
    public get swapShiftsChangeRequests(): SwapShiftsChangeRequestsRequestBuilder {
        return new SwapShiftsChangeRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity. */
    public get timeOffReasons(): TimeOffReasonsRequestBuilder {
        return new TimeOffReasonsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the timeOffRequests property of the microsoft.graph.schedule entity. */
    public get timeOffRequests(): TimeOffRequestsRequestBuilder {
        return new TimeOffRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the timesOff property of the microsoft.graph.schedule entity. */
    public get timesOff(): TimesOffRequestBuilder {
        return new TimesOffRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
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
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ScheduleRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).When clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the `provisionStatus` property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the `provisionStatusCode` property. Clients can also inspect the configuration of the schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Schedule
     * @see {@link https://docs.microsoft.com/graph/api/schedule-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ScheduleRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Schedule | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Schedule>(requestInfo, createScheduleFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the offerShiftRequests property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a OfferShiftRequestItemRequestBuilder
     */
    public offerShiftRequestsById(id: string) : OfferShiftRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["offerShiftRequest%2Did"] = id
        return new OfferShiftRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a OpenShiftChangeRequestItemRequestBuilder
     */
    public openShiftChangeRequestsById(id: string) : OpenShiftChangeRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShiftChangeRequest%2Did"] = id
        return new OpenShiftChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the openShifts property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a OpenShiftItemRequestBuilder
     */
    public openShiftsById(id: string) : OpenShiftItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShift%2Did"] = id
        return new OpenShiftItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property schedule in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Schedule
     */
    public put(body: Schedule | undefined, requestConfiguration?: ScheduleRequestBuilderPutRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Schedule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPutRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Schedule>(requestInfo, createScheduleFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a SchedulingGroupItemRequestBuilder
     */
    public schedulingGroupsById(id: string) : SchedulingGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schedulingGroup%2Did"] = id
        return new SchedulingGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the shifts property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a ShiftItemRequestBuilder
     */
    public shiftsById(id: string) : ShiftItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["shift%2Did"] = id
        return new ShiftItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a SwapShiftsChangeRequestItemRequestBuilder
     */
    public swapShiftsChangeRequestsById(id: string) : SwapShiftsChangeRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["swapShiftsChangeRequest%2Did"] = id
        return new SwapShiftsChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a TimeOffReasonItemRequestBuilder
     */
    public timeOffReasonsById(id: string) : TimeOffReasonItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffReason%2Did"] = id
        return new TimeOffReasonItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the timeOffRequests property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a TimeOffRequestItemRequestBuilder
     */
    public timeOffRequestsById(id: string) : TimeOffRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffRequest%2Did"] = id
        return new TimeOffRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
     * @param id Unique identifier of the item
     * @returns a TimeOffItemRequestBuilder
     */
    public timesOffById(id: string) : TimeOffItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOff%2Did"] = id
        return new TimeOffItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property schedule for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ScheduleRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).When clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the `provisionStatus` property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the `provisionStatusCode` property. Clients can also inspect the configuration of the schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScheduleRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property schedule in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPutRequestInformation(body: Schedule | undefined, requestConfiguration?: ScheduleRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
