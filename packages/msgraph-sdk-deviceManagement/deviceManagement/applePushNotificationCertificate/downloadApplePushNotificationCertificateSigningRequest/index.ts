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
 * @returns {DownloadApplePushNotificationCertificateSigningRequestGetResponse}
 */
// @ts-ignore
export function createDownloadApplePushNotificationCertificateSigningRequestGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDownloadApplePushNotificationCertificateSigningRequestGetResponse;
}
/**
 * The deserialization information for the current model
 * @param DownloadApplePushNotificationCertificateSigningRequestGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDownloadApplePushNotificationCertificateSigningRequestGetResponse(downloadApplePushNotificationCertificateSigningRequestGetResponse: Partial<DownloadApplePushNotificationCertificateSigningRequestGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { downloadApplePushNotificationCertificateSigningRequestGetResponse.backingStoreEnabled = true; },
        "value": n => { downloadApplePushNotificationCertificateSigningRequestGetResponse.value = n.getStringValue(); },
    }
}
export interface DownloadApplePushNotificationCertificateSigningRequestGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: string | null;
}
/**
 * Provides operations to call the downloadApplePushNotificationCertificateSigningRequest method.
 */
export interface DownloadApplePushNotificationCertificateSigningRequestRequestBuilder extends BaseRequestBuilder<DownloadApplePushNotificationCertificateSigningRequestRequestBuilder> {
    /**
     * Download Apple push notification certificate signing request
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DownloadApplePushNotificationCertificateSigningRequestGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-applepushnotificationcertificate-downloadapplepushnotificationcertificatesigningrequest?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DownloadApplePushNotificationCertificateSigningRequestGetResponse | undefined>;
    /**
     * Download Apple push notification certificate signing request
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param DownloadApplePushNotificationCertificateSigningRequestGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDownloadApplePushNotificationCertificateSigningRequestGetResponse(writer: SerializationWriter, downloadApplePushNotificationCertificateSigningRequestGetResponse: Partial<DownloadApplePushNotificationCertificateSigningRequestGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!downloadApplePushNotificationCertificateSigningRequestGetResponse || isSerializingDerivedType) { return; }
    writer.writeStringValue("value", downloadApplePushNotificationCertificateSigningRequestGetResponse.value);
    writer.writeAdditionalData(downloadApplePushNotificationCertificateSigningRequestGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DownloadApplePushNotificationCertificateSigningRequestRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/applePushNotificationCertificate/downloadApplePushNotificationCertificateSigningRequest()";
/**
 * Metadata for all the requests in the request builder.
 */
export const DownloadApplePushNotificationCertificateSigningRequestRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DownloadApplePushNotificationCertificateSigningRequestRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDownloadApplePushNotificationCertificateSigningRequestGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
