/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getSkypeForBusinessOrganizerActivityMinuteCounts method.
 */
export interface GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder extends BaseRequestBuilder<GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder> {
    /**
     * Get usage trends on the length in minutes and type of conference sessions held and organized by users in your organization. Types of conference sessions include audio/video, and dial-in and dial-out - Microsoft.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-getskypeforbusinessorganizeractivityminutecounts?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get usage trends on the length in minutes and type of conference sessions held and organized by users in your organization. Types of conference sessions include audio/video, and dial-in and dial-out - Microsoft.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilderUriTemplate = "{+baseurl}/reports/getSkypeForBusinessOrganizerActivityMinuteCounts(period='{period}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilderUriTemplate,
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
