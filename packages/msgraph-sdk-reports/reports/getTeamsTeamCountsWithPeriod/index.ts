/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getTeamsTeamCounts method.
 */
export interface GetTeamsTeamCountsWithPeriodRequestBuilder extends BaseRequestBuilder<GetTeamsTeamCountsWithPeriodRequestBuilder> {
    /**
     * Get the number of teams of a particular type in an instance of Microsoft Teams.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-getteamsteamcounts?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get the number of teams of a particular type in an instance of Microsoft Teams.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetTeamsTeamCountsWithPeriodRequestBuilderUriTemplate = "{+baseurl}/reports/getTeamsTeamCounts(period='{period}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetTeamsTeamCountsWithPeriodRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetTeamsTeamCountsWithPeriodRequestBuilderUriTemplate,
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
