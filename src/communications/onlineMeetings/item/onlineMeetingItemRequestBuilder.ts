import {createOnlineMeetingFromDiscriminatorValue} from '../../../models/createOnlineMeetingFromDiscriminatorValue';
import {deserializeIntoOnlineMeeting} from '../../../models/deserializeIntoOnlineMeeting';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {OnlineMeeting} from '../../../models/onlineMeeting';
import {serializeOnlineMeeting} from '../../../models/serializeOnlineMeeting';
import {AttendanceReportsRequestBuilder} from './attendanceReports/attendanceReportsRequestBuilder';
import {AttendeeReportRequestBuilder} from './attendeeReport/attendeeReportRequestBuilder';
import {GetVirtualAppointmentJoinWebUrlRequestBuilder} from './getVirtualAppointmentJoinWebUrl/getVirtualAppointmentJoinWebUrlRequestBuilder';
import {OnlineMeetingItemRequestBuilderDeleteRequestConfiguration} from './onlineMeetingItemRequestBuilderDeleteRequestConfiguration';
import {OnlineMeetingItemRequestBuilderGetRequestConfiguration} from './onlineMeetingItemRequestBuilderGetRequestConfiguration';
import {OnlineMeetingItemRequestBuilderPatchRequestConfiguration} from './onlineMeetingItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
 */
export class OnlineMeetingItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeeting entity.
     */
    public get attendanceReports(): AttendanceReportsRequestBuilder {
        return new AttendanceReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the cloudCommunications entity.
     */
    public get attendeeReport(): AttendeeReportRequestBuilder {
        return new AttendeeReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getVirtualAppointmentJoinWebUrl method.
     */
    public get getVirtualAppointmentJoinWebUrl(): GetVirtualAppointmentJoinWebUrlRequestBuilder {
        return new GetVirtualAppointmentJoinWebUrlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OnlineMeetingItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/onlineMeetings/{onlineMeeting%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property onlineMeetings for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: OnlineMeetingItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get onlineMeetings from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeeting
     */
    public get(requestConfiguration?: OnlineMeetingItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OnlineMeeting | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnlineMeeting>(requestInfo, createOnlineMeetingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property onlineMeetings in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeeting
     */
    public patch(body: OnlineMeeting, requestConfiguration?: OnlineMeetingItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OnlineMeeting | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnlineMeeting>(requestInfo, createOnlineMeetingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property onlineMeetings for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OnlineMeetingItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get onlineMeetings from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnlineMeetingItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property onlineMeetings in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OnlineMeeting, requestConfiguration?: OnlineMeetingItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnlineMeeting);
        return requestInfo;
    };
}
