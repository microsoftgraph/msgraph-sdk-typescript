/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue, type MicrosoftAuthenticatorAuthenticationMethod } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DeviceRequestBuilderRequestsMetadata, type DeviceRequestBuilder } from './device/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity.
 */
export interface MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder extends BaseRequestBuilder<MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder> {
    /**
     * Provides operations to manage the device property of the microsoft.graph.microsoftAuthenticatorAuthenticationMethod entity.
     */
    get device(): DeviceRequestBuilder;
    /**
     * Delete a microsoftAuthenticatorAuthenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethod-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a microsoftAuthenticatorAuthenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MicrosoftAuthenticatorAuthenticationMethod>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethod-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParameters> | undefined) : Promise<MicrosoftAuthenticatorAuthenticationMethod | undefined>;
    /**
     * Delete a microsoftAuthenticatorAuthenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a microsoftAuthenticatorAuthenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a microsoftAuthenticatorAuthenticationMethod object.
 */
export interface MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParameters {
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
export const MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    device: {
        requestsMetadata: DeviceRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue,
        queryParametersMapper: MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
