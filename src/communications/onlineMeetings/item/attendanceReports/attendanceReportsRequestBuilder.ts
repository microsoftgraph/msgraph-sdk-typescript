import { type MeetingAttendanceReportCollectionResponse } from '../../../../models/';
import { createMeetingAttendanceReportFromDiscriminatorValue, deserializeIntoMeetingAttendanceReport, serializeMeetingAttendanceReport, type MeetingAttendanceReport } from '../../../../models/meetingAttendanceReport';
import { createMeetingAttendanceReportCollectionResponseFromDiscriminatorValue } from '../../../../models/meetingAttendanceReportCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { MeetingAttendanceReportItemRequestBuilder } from './item/meetingAttendanceReportItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AttendanceReportsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AttendanceReportsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AttendanceReportsRequestBuilderGetQueryParameters;
}
export interface AttendanceReportsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeeting entity.
 */
export class AttendanceReportsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeeting entity.
     * @param meetingAttendanceReportId The unique identifier of meetingAttendanceReport
     * @returns a MeetingAttendanceReportItemRequestBuilder
     */
    public byMeetingAttendanceReportId(meetingAttendanceReportId: string) : MeetingAttendanceReportItemRequestBuilder {
        if(!meetingAttendanceReportId) throw new Error("meetingAttendanceReportId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["meetingAttendanceReport%2Did"] = meetingAttendanceReportId
        return new MeetingAttendanceReportItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AttendanceReportsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/onlineMeetings/{onlineMeeting%2Did}/attendanceReports{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of meetingAttendanceReport objects for an onlineMeeting. Each time an online meeting ends, an attendance report is generated for that session.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MeetingAttendanceReportCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/meetingattendancereport-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttendanceReportsRequestBuilderGetRequestConfiguration | undefined) : Promise<MeetingAttendanceReportCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MeetingAttendanceReportCollectionResponse>(requestInfo, createMeetingAttendanceReportCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to attendanceReports for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MeetingAttendanceReport
     */
    public post(body: MeetingAttendanceReport, requestConfiguration?: AttendanceReportsRequestBuilderPostRequestConfiguration | undefined) : Promise<MeetingAttendanceReport | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MeetingAttendanceReport>(requestInfo, createMeetingAttendanceReportFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of meetingAttendanceReport objects for an onlineMeeting. Each time an online meeting ends, an attendance report is generated for that session.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttendanceReportsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to attendanceReports for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MeetingAttendanceReport, requestConfiguration?: AttendanceReportsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMeetingAttendanceReport);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a attendanceReportsRequestBuilder
     */
    public withUrl(rawUrl: string) : AttendanceReportsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AttendanceReportsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
