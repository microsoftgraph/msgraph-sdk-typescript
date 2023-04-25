import {AttendanceRecord, AttendanceRecordCollectionResponse} from '../../../../../../models/';
import {createAttendanceRecordCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createAttendanceRecordCollectionResponseFromDiscriminatorValue';
import {createAttendanceRecordFromDiscriminatorValue} from '../../../../../../models/createAttendanceRecordFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AttendanceRecordsRequestBuilderGetRequestConfiguration} from './attendanceRecordsRequestBuilderGetRequestConfiguration';
import {AttendanceRecordsRequestBuilderPostRequestConfiguration} from './attendanceRecordsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AttendanceRecordItemRequestBuilder} from './item/attendanceRecordItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
 */
export class AttendanceRecordsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
     * @param attendanceRecordId Unique identifier of the item
     * @returns a AttendanceRecordItemRequestBuilder
     */
    public byAttendanceRecordId(attendanceRecordId: string) : AttendanceRecordItemRequestBuilder {
        if(!attendanceRecordId) throw new Error("attendanceRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attendanceRecord%2Did"] = attendanceRecordId
        return new AttendanceRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AttendanceRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/onlineMeetings/{onlineMeeting%2Did}/attendanceReports/{meetingAttendanceReport%2Did}/attendanceRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List of attendance records of an attendance report. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AttendanceRecordCollectionResponse
     */
    public get(requestConfiguration?: AttendanceRecordsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AttendanceRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AttendanceRecordCollectionResponse>(requestInfo, createAttendanceRecordCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to attendanceRecords for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AttendanceRecord
     */
    public post(body: AttendanceRecord | undefined, requestConfiguration?: AttendanceRecordsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AttendanceRecord | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AttendanceRecord>(requestInfo, createAttendanceRecordFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List of attendance records of an attendance report. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttendanceRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to attendanceRecords for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AttendanceRecord | undefined, requestConfiguration?: AttendanceRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
