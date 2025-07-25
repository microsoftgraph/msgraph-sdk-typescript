/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDomainFromDiscriminatorValue, type Domain } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the verify method.
 */
export interface VerifyRequestBuilder extends BaseRequestBuilder<VerifyRequestBuilder> {
    /**
     * Validate the ownership of a domain. This operation only applies to an unverified domain. For an unverified domain, the isVerified property is false.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Domain>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/domain-verify?view=graph-rest-1.0|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Domain | undefined>;
    /**
     * Validate the ownership of a domain. This operation only applies to an unverified domain. For an unverified domain, the isVerified property is false.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const VerifyRequestBuilderUriTemplate = "{+baseurl}/domains/{domain%2Did}/verify";
/**
 * Metadata for all the requests in the request builder.
 */
export const VerifyRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: VerifyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDomainFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
