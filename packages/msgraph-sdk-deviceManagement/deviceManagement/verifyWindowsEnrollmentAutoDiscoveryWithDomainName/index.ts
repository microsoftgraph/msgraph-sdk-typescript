/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse}
 */
// @ts-ignore
export function createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse;
}
/**
 * The deserialization information for the current model
 * @param VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse: Partial<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse.backingStoreEnabled = true; },
        "value": n => { verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse.value = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse(writer: SerializationWriter, verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse: Partial<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse.value);
    writer.writeAdditionalData(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse.additionalData);
}
export interface VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: boolean | null;
}
/**
 * Provides operations to call the verifyWindowsEnrollmentAutoDiscovery method.
 */
export interface VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder extends BaseRequestBuilder<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder> {
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponse | undefined>;
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/verifyWindowsEnrollmentAutoDiscovery(domainName='{domainName}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
