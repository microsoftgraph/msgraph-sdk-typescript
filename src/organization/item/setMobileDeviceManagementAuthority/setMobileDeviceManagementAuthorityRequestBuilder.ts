import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { createSetMobileDeviceManagementAuthorityResponseFromDiscriminatorValue } from './createSetMobileDeviceManagementAuthorityResponseFromDiscriminatorValue';
import { type SetMobileDeviceManagementAuthorityResponse } from './index';
import { type SetMobileDeviceManagementAuthorityRequestBuilderPostRequestConfiguration } from './setMobileDeviceManagementAuthorityRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the setMobileDeviceManagementAuthority method.
 */
export class SetMobileDeviceManagementAuthorityRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SetMobileDeviceManagementAuthorityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/organization/{organization%2Did}/setMobileDeviceManagementAuthority");
    };
    /**
     * Set mobile device management authority
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SetMobileDeviceManagementAuthorityResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-organization-setmobiledevicemanagementauthority?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: SetMobileDeviceManagementAuthorityRequestBuilderPostRequestConfiguration | undefined) : Promise<SetMobileDeviceManagementAuthorityResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SetMobileDeviceManagementAuthorityResponse>(requestInfo, createSetMobileDeviceManagementAuthorityResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Set mobile device management authority
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: SetMobileDeviceManagementAuthorityRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a setMobileDeviceManagementAuthorityRequestBuilder
     */
    public withUrl(rawUrl: string) : SetMobileDeviceManagementAuthorityRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SetMobileDeviceManagementAuthorityRequestBuilder(rawUrl, this.requestAdapter);
    };
}
