import {createMeetingAttendanceReportFromDiscriminatorValue} from '../../../../../models/createMeetingAttendanceReportFromDiscriminatorValue';
import {deserializeIntoMeetingAttendanceReport} from '../../../../../models/deserializeIntoMeetingAttendanceReport';
import type {MeetingAttendanceReport} from '../../../../../models/meetingAttendanceReport';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeMeetingAttendanceReport} from '../../../../../models/serializeMeetingAttendanceReport';
import {AttendanceRecordsRequestBuilder} from './attendanceRecords/attendanceRecordsRequestBuilder';
import {MeetingAttendanceReportItemRequestBuilderDeleteRequestConfiguration} from './meetingAttendanceReportItemRequestBuilderDeleteRequestConfiguration';
import {MeetingAttendanceReportItemRequestBuilderGetRequestConfiguration} from './meetingAttendanceReportItemRequestBuilderGetRequestConfiguration';
import {MeetingAttendanceReportItemRequestBuilderPatchRequestConfiguration} from './meetingAttendanceReportItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeeting entity.
 */
export class MeetingAttendanceReportItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
     */
    public get attendanceRecords(): AttendanceRecordsRequestBuilder {
        return new AttendanceRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MeetingAttendanceReportItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/onlineMeetings/{onlineMeeting%2Did}/attendanceReports/{meetingAttendanceReport%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property attendanceReports for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: MeetingAttendanceReportItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the meetingAttendanceReport for an onlineMeeting. Each time an online meeting ends, an attendance report will be generated for that session.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MeetingAttendanceReport
     * @see {@link https://learn.microsoft.com/graph/api/meetingattendancereport-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MeetingAttendanceReportItemRequestBuilderGetRequestConfiguration | undefined) : Promise<MeetingAttendanceReport | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MeetingAttendanceReport>(requestInfo, createMeetingAttendanceReportFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property attendanceReports in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MeetingAttendanceReport
     */
    public patch(body: MeetingAttendanceReport, requestConfiguration?: MeetingAttendanceReportItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<MeetingAttendanceReport | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MeetingAttendanceReport>(requestInfo, createMeetingAttendanceReportFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property attendanceReports for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MeetingAttendanceReportItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the meetingAttendanceReport for an onlineMeeting. Each time an online meeting ends, an attendance report will be generated for that session.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MeetingAttendanceReportItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property attendanceReports in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MeetingAttendanceReport, requestConfiguration?: MeetingAttendanceReportItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMeetingAttendanceReport);
        return requestInfo;
    };
}
