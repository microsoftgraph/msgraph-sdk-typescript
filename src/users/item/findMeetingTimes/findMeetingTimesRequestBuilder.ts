import {createMeetingTimeSuggestionsResultFromDiscriminatorValue} from '../../../models/createMeetingTimeSuggestionsResultFromDiscriminatorValue';
import {deserializeIntoMeetingTimeSuggestionsResult} from '../../../models/deserializeIntoMeetingTimeSuggestionsResult';
import {MeetingTimeSuggestionsResult} from '../../../models/meetingTimeSuggestionsResult';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeMeetingTimeSuggestionsResult} from '../../../models/serializeMeetingTimeSuggestionsResult';
import {deserializeIntoFindMeetingTimesPostRequestBody} from './deserializeIntoFindMeetingTimesPostRequestBody';
import {FindMeetingTimesPostRequestBody} from './findMeetingTimesPostRequestBody';
import {FindMeetingTimesRequestBuilderPostRequestConfiguration} from './findMeetingTimesRequestBuilderPostRequestConfiguration';
import {serializeFindMeetingTimesPostRequestBody} from './serializeFindMeetingTimesPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the findMeetingTimes method.
 */
export class FindMeetingTimesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new FindMeetingTimesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/findMeetingTimes");
    };
    /**
     * Suggest meeting times and locations based on organizer and attendee availability, and time or location constraints specified as parameters. If **findMeetingTimes** cannot return any meeting suggestions, the response would indicate a reason in the **emptySuggestionsReason** property. Based on this value, you can better adjust the parameters and call **findMeetingTimes** again. The algorithm used to suggest meeting times and locations undergoes fine-tuning from time to time. In scenarios like test environments where the input parameters and calendar data remain static, expect that the suggested results may differ over time.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MeetingTimeSuggestionsResult
     * @see {@link https://docs.microsoft.com/graph/api/user-findmeetingtimes?view=graph-rest-1.0|Find more info here}
     */
    public post(body: FindMeetingTimesPostRequestBody | undefined, requestConfiguration?: FindMeetingTimesRequestBuilderPostRequestConfiguration | undefined) : Promise<MeetingTimeSuggestionsResult | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MeetingTimeSuggestionsResult>(requestInfo, createMeetingTimeSuggestionsResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Suggest meeting times and locations based on organizer and attendee availability, and time or location constraints specified as parameters. If **findMeetingTimes** cannot return any meeting suggestions, the response would indicate a reason in the **emptySuggestionsReason** property. Based on this value, you can better adjust the parameters and call **findMeetingTimes** again. The algorithm used to suggest meeting times and locations undergoes fine-tuning from time to time. In scenarios like test environments where the input parameters and calendar data remain static, expect that the suggested results may differ over time.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FindMeetingTimesPostRequestBody | undefined, requestConfiguration?: FindMeetingTimesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeFindMeetingTimesPostRequestBody);
        return requestInfo;
    };
}
