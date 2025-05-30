/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getTeamsTeamActivityDetail method.
 */
export interface GetTeamsTeamActivityDetailWithPeriodRequestBuilder extends BaseRequestBuilder<GetTeamsTeamActivityDetailWithPeriodRequestBuilder> {
    /**
     * Get details about Microsoft Teams activity by team. The numbers include activities for both licensed and nonlicensed users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get details about Microsoft Teams activity by team. The numbers include activities for both licensed and nonlicensed users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetTeamsTeamActivityDetailWithPeriodRequestBuilderUriTemplate = "{+baseurl}/reports/getTeamsTeamActivityDetail(period='{period}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetTeamsTeamActivityDetailWithPeriodRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetTeamsTeamActivityDetailWithPeriodRequestBuilderUriTemplate,
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
