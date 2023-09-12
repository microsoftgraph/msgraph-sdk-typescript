import { type AttendanceRecordCollectionResponse } from '../../../../../../models/';
import { type AttendanceRecord } from '../../../../../../models/attendanceRecord';
import { createAttendanceRecordCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createAttendanceRecordCollectionResponseFromDiscriminatorValue';
import { createAttendanceRecordFromDiscriminatorValue } from '../../../../../../models/createAttendanceRecordFromDiscriminatorValue';
import { deserializeIntoAttendanceRecord } from '../../../../../../models/deserializeIntoAttendanceRecord';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeAttendanceRecord } from '../../../../../../models/serializeAttendanceRecord';
import { type AttendanceRecordsRequestBuilderGetRequestConfiguration } from './attendanceRecordsRequestBuilderGetRequestConfiguration';
import { type AttendanceRecordsRequestBuilderPostRequestConfiguration } from './attendanceRecordsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AttendanceRecordItemRequestBuilder } from './item/attendanceRecordItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
 */
export class AttendanceRecordsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
     * @param attendanceRecordId The unique identifier of attendanceRecord
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/onlineMeetings/{onlineMeeting%2Did}/attendanceReports/{meetingAttendanceReport%2Did}/attendanceRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of attendanceRecord objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttendanceRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/attendancerecord-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttendanceRecordsRequestBuilderGetRequestConfiguration | undefined) : Promise<AttendanceRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttendanceRecordCollectionResponse>(requestInfo, createAttendanceRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to attendanceRecords for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttendanceRecord
     */
    public post(body: AttendanceRecord, requestConfiguration?: AttendanceRecordsRequestBuilderPostRequestConfiguration | undefined) : Promise<AttendanceRecord | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttendanceRecord>(requestInfo, createAttendanceRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of attendanceRecord objects and their properties.
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
     * Create new navigation property to attendanceRecords for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AttendanceRecord, requestConfiguration?: AttendanceRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAttendanceRecord);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a attendanceRecordsRequestBuilder
     */
    public withUrl(rawUrl: string) : AttendanceRecordsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AttendanceRecordsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
