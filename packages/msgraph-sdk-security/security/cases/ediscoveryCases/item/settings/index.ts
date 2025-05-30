/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createEdiscoveryCaseSettingsFromDiscriminatorValue, serializeEdiscoveryCaseSettings, type EdiscoveryCaseSettings } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { MicrosoftGraphSecurityResetToDefaultRequestBuilderRequestsMetadata, type MicrosoftGraphSecurityResetToDefaultRequestBuilder } from './microsoftGraphSecurityResetToDefault/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.security.ediscoveryCase entity.
 */
export interface SettingsRequestBuilder extends BaseRequestBuilder<SettingsRequestBuilder> {
    /**
     * Provides operations to call the resetToDefault method.
     */
    get microsoftGraphSecurityResetToDefault(): MicrosoftGraphSecurityResetToDefaultRequestBuilder;
    /**
     * Delete navigation property settings for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an ediscoveryCaseSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoveryCaseSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : Promise<EdiscoveryCaseSettings | undefined>;
    /**
     * Update the properties of an ediscoveryCaseSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoveryCaseSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: EdiscoveryCaseSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EdiscoveryCaseSettings | undefined>;
    /**
     * Delete navigation property settings for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an ediscoveryCaseSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an ediscoveryCaseSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EdiscoveryCaseSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an ediscoveryCaseSettings object.
 */
export interface SettingsRequestBuilderGetQueryParameters {
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
export const SettingsRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/settings{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SettingsRequestBuilderNavigationMetadata: Record<Exclude<keyof SettingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    microsoftGraphSecurityResetToDefault: {
        requestsMetadata: MicrosoftGraphSecurityResetToDefaultRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SettingsRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoveryCaseSettingsFromDiscriminatorValue,
        queryParametersMapper: SettingsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoveryCaseSettingsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdiscoveryCaseSettings,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
