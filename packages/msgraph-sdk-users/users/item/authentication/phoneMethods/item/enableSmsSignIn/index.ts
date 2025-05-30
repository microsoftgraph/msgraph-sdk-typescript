/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the enableSmsSignIn method.
 */
export interface EnableSmsSignInRequestBuilder extends BaseRequestBuilder<EnableSmsSignInRequestBuilder> {
    /**
     * Enable SMS sign-in for an existing mobile phone number registered to a user. To be successfully enabled:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/phoneauthenticationmethod-enablesmssignin?view=graph-rest-1.0|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Enable SMS sign-in for an existing mobile phone number registered to a user. To be successfully enabled:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const EnableSmsSignInRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/phoneMethods/{phoneAuthenticationMethod%2Did}/enableSmsSignIn";
/**
 * Metadata for all the requests in the request builder.
 */
export const EnableSmsSignInRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: EnableSmsSignInRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */
