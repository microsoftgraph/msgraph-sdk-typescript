/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPhoneAuthenticationMethodFromDiscriminatorValue, serializePhoneAuthenticationMethod, type PhoneAuthenticationMethod } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DisableSmsSignInRequestBuilderRequestsMetadata, type DisableSmsSignInRequestBuilder } from './disableSmsSignIn/index.js';
// @ts-ignore
import { EnableSmsSignInRequestBuilderRequestsMetadata, type EnableSmsSignInRequestBuilder } from './enableSmsSignIn/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
 */
export interface PhoneAuthenticationMethodItemRequestBuilder extends BaseRequestBuilder<PhoneAuthenticationMethodItemRequestBuilder> {
    /**
     * Provides operations to call the disableSmsSignIn method.
     */
    get disableSmsSignIn(): DisableSmsSignInRequestBuilder;
    /**
     * Provides operations to call the enableSmsSignIn method.
     */
    get enableSmsSignIn(): EnableSmsSignInRequestBuilder;
    /**
     * Delete navigation property phoneMethods for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The phone numbers registered to a user for authentication.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PhoneAuthenticationMethod>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters> | undefined) : Promise<PhoneAuthenticationMethod | undefined>;
    /**
     * Update a user's phone number associated with a phone authentication method object. You can't change a phone's type. To change a phone's type, add a new number of the desired type and then delete the object with the original type. If a user is enabled by policy to use SMS to sign in and the mobile number is changed, the system will attempt to register the number for use in that system. Self-service operations aren't supported.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PhoneAuthenticationMethod>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/phoneauthenticationmethod-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: PhoneAuthenticationMethod, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PhoneAuthenticationMethod | undefined>;
    /**
     * Delete navigation property phoneMethods for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The phone numbers registered to a user for authentication.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a user's phone number associated with a phone authentication method object. You can't change a phone's type. To change a phone's type, add a new number of the desired type and then delete the object with the original type. If a user is enabled by policy to use SMS to sign in and the mobile number is changed, the system will attempt to register the number for use in that system. Self-service operations aren't supported.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PhoneAuthenticationMethod, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The phone numbers registered to a user for authentication.
 */
export interface PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const PhoneAuthenticationMethodItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/phoneMethods/{phoneAuthenticationMethod%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PhoneAuthenticationMethodItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PhoneAuthenticationMethodItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PhoneAuthenticationMethodItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    disableSmsSignIn: {
        requestsMetadata: DisableSmsSignInRequestBuilderRequestsMetadata,
    },
    enableSmsSignIn: {
        requestsMetadata: EnableSmsSignInRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PhoneAuthenticationMethodItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PhoneAuthenticationMethodItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: PhoneAuthenticationMethodItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPhoneAuthenticationMethodFromDiscriminatorValue,
        queryParametersMapper: PhoneAuthenticationMethodItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PhoneAuthenticationMethodItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPhoneAuthenticationMethodFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePhoneAuthenticationMethod,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
