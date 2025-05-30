/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getM365AppUserCounts method.
 */
export interface GetM365AppUserCountsWithPeriodRequestBuilder extends BaseRequestBuilder<GetM365AppUserCountsWithPeriodRequestBuilder> {
    /**
     * Get a report that provides the trend in the number of active users for each app (Outlook, Word, Excel, PowerPoint, OneNote, and Teams) in your organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-getm365appusercounts?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get a report that provides the trend in the number of active users for each app (Outlook, Word, Excel, PowerPoint, OneNote, and Teams) in your organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetM365AppUserCountsWithPeriodRequestBuilderUriTemplate = "{+baseurl}/reports/getM365AppUserCounts(period='{period}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetM365AppUserCountsWithPeriodRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetM365AppUserCountsWithPeriodRequestBuilderUriTemplate,
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
