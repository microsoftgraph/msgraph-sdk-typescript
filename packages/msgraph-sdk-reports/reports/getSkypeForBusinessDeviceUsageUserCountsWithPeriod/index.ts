/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getSkypeForBusinessDeviceUsageUserCounts method.
 */
export interface GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder extends BaseRequestBuilder<GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder> {
    /**
     * Get the usage trends on how many users in your organization have connected using the Skype for Business app. You'll also get a breakdown by the type of device (Windows, Windows phone, Android phone, iPhone, or iPad) on which the Skype for Business client app is installed and used across your organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-getskypeforbusinessdeviceusageusercounts?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get the usage trends on how many users in your organization have connected using the Skype for Business app. You'll also get a breakdown by the type of device (Windows, Windows phone, Android phone, iPhone, or iPad) on which the Skype for Business client app is installed and used across your organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilderUriTemplate = "{+baseurl}/reports/getSkypeForBusinessDeviceUsageUserCounts(period='{period}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/* tslint:enable */
/* eslint-enable */
