import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {createGetVirtualAppointmentJoinWebUrlResponseFromDiscriminatorValue} from './createGetVirtualAppointmentJoinWebUrlResponseFromDiscriminatorValue';
import {GetVirtualAppointmentJoinWebUrlRequestBuilderGetRequestConfiguration} from './getVirtualAppointmentJoinWebUrlRequestBuilderGetRequestConfiguration';
import {GetVirtualAppointmentJoinWebUrlResponse} from './index';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getVirtualAppointmentJoinWebUrl method.
 */
export class GetVirtualAppointmentJoinWebUrlRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetVirtualAppointmentJoinWebUrlRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onlineMeetings/{onlineMeeting%2Did}/getVirtualAppointmentJoinWebUrl()");
    };
    /**
     * Invoke function getVirtualAppointmentJoinWebUrl
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetVirtualAppointmentJoinWebUrlResponse
     */
    public get(requestConfiguration?: GetVirtualAppointmentJoinWebUrlRequestBuilderGetRequestConfiguration | undefined) : Promise<GetVirtualAppointmentJoinWebUrlResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetVirtualAppointmentJoinWebUrlResponse>(requestInfo, createGetVirtualAppointmentJoinWebUrlResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getVirtualAppointmentJoinWebUrl
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetVirtualAppointmentJoinWebUrlRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
