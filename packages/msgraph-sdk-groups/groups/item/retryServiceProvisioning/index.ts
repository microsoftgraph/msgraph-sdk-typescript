/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the retryServiceProvisioning method.
 */
export interface RetryServiceProvisioningRequestBuilder extends BaseRequestBuilder<RetryServiceProvisioningRequestBuilder> {
    /**
     * Retry the group service provisioning.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-retryserviceprovisioning?view=graph-rest-1.0|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retry the group service provisioning.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const RetryServiceProvisioningRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/retryServiceProvisioning";
/**
 * Metadata for all the requests in the request builder.
 */
export const RetryServiceProvisioningRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RetryServiceProvisioningRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */
