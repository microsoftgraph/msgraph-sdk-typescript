import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createGetStaffAvailabilityResponseFromDiscriminatorValue} from './createGetStaffAvailabilityResponseFromDiscriminatorValue';
import {deserializeIntoGetStaffAvailabilityPostRequestBody} from './deserializeIntoGetStaffAvailabilityPostRequestBody';
import {deserializeIntoGetStaffAvailabilityResponse} from './deserializeIntoGetStaffAvailabilityResponse';
import {GetStaffAvailabilityPostRequestBody} from './getStaffAvailabilityPostRequestBody';
import {GetStaffAvailabilityRequestBuilderPostRequestConfiguration} from './getStaffAvailabilityRequestBuilderPostRequestConfiguration';
import {GetStaffAvailabilityResponse} from './getStaffAvailabilityResponse';
import {serializeGetStaffAvailabilityPostRequestBody} from './serializeGetStaffAvailabilityPostRequestBody';
import {serializeGetStaffAvailabilityResponse} from './serializeGetStaffAvailabilityResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getStaffAvailability method.
 */
export class GetStaffAvailabilityRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetStaffAvailabilityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/getStaffAvailability");
    };
    /**
     * Get the availability information of staff members of a Microsoft Bookings calendar.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetStaffAvailabilityResponse
     * @see {@link https://docs.microsoft.com/graph/api/bookingbusiness-getstaffavailability?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetStaffAvailabilityPostRequestBody | undefined, requestConfiguration?: GetStaffAvailabilityRequestBuilderPostRequestConfiguration | undefined) : Promise<GetStaffAvailabilityResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetStaffAvailabilityResponse>(requestInfo, createGetStaffAvailabilityResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the availability information of staff members of a Microsoft Bookings calendar.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetStaffAvailabilityPostRequestBody | undefined, requestConfiguration?: GetStaffAvailabilityRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetStaffAvailabilityPostRequestBody);
        return requestInfo;
    };
}
