/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAuthenticationConfigurationValidationFromDiscriminatorValue, createCustomExtensionAuthenticationConfigurationFromDiscriminatorValue, createCustomExtensionEndpointConfigurationFromDiscriminatorValue, serializeAuthenticationConfigurationValidation, serializeCustomExtensionAuthenticationConfiguration, serializeCustomExtensionEndpointConfiguration, type AuthenticationConfigurationValidation, type CustomExtensionAuthenticationConfiguration, type CustomExtensionEndpointConfiguration } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ValidateAuthenticationConfigurationPostRequestBody}
 */
// @ts-ignore
export function createValidateAuthenticationConfigurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoValidateAuthenticationConfigurationPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ValidateAuthenticationConfigurationPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoValidateAuthenticationConfigurationPostRequestBody(validateAuthenticationConfigurationPostRequestBody: Partial<ValidateAuthenticationConfigurationPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "authenticationConfiguration": n => { validateAuthenticationConfigurationPostRequestBody.authenticationConfiguration = n.getObjectValue<CustomExtensionAuthenticationConfiguration>(createCustomExtensionAuthenticationConfigurationFromDiscriminatorValue); },
        "backingStoreEnabled": n => { validateAuthenticationConfigurationPostRequestBody.backingStoreEnabled = true; },
        "endpointConfiguration": n => { validateAuthenticationConfigurationPostRequestBody.endpointConfiguration = n.getObjectValue<CustomExtensionEndpointConfiguration>(createCustomExtensionEndpointConfigurationFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ValidateAuthenticationConfigurationPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeValidateAuthenticationConfigurationPostRequestBody(writer: SerializationWriter, validateAuthenticationConfigurationPostRequestBody: Partial<ValidateAuthenticationConfigurationPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!validateAuthenticationConfigurationPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue<CustomExtensionAuthenticationConfiguration>("authenticationConfiguration", validateAuthenticationConfigurationPostRequestBody.authenticationConfiguration, serializeCustomExtensionAuthenticationConfiguration);
    writer.writeObjectValue<CustomExtensionEndpointConfiguration>("endpointConfiguration", validateAuthenticationConfigurationPostRequestBody.endpointConfiguration, serializeCustomExtensionEndpointConfiguration);
    writer.writeAdditionalData(validateAuthenticationConfigurationPostRequestBody.additionalData);
}
export interface ValidateAuthenticationConfigurationPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The authenticationConfiguration property
     */
    authenticationConfiguration?: CustomExtensionAuthenticationConfiguration | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The endpointConfiguration property
     */
    endpointConfiguration?: CustomExtensionEndpointConfiguration | null;
}
/**
 * Provides operations to call the validateAuthenticationConfiguration method.
 */
export interface ValidateAuthenticationConfigurationRequestBuilder extends BaseRequestBuilder<ValidateAuthenticationConfigurationRequestBuilder> {
    /**
     * Invoke action validateAuthenticationConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationConfigurationValidation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ValidateAuthenticationConfigurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthenticationConfigurationValidation | undefined>;
    /**
     * Invoke action validateAuthenticationConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ValidateAuthenticationConfigurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ValidateAuthenticationConfigurationRequestBuilderUriTemplate = "{+baseurl}/identity/customAuthenticationExtensions/validateAuthenticationConfiguration";
/**
 * Metadata for all the requests in the request builder.
 */
export const ValidateAuthenticationConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ValidateAuthenticationConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationConfigurationValidationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeValidateAuthenticationConfigurationPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
