/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPrintCertificateSigningRequestFromDiscriminatorValue, serializePrintCertificateSigningRequest, type PrintCertificateSigningRequest } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreatePostRequestBody}
 */
// @ts-ignore
export function createCreatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCreatePostRequestBody;
}
export interface CreatePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The certificateSigningRequest property
     */
    certificateSigningRequest?: PrintCertificateSigningRequest | null;
    /**
     * The connectorId property
     */
    connectorId?: string | null;
    /**
     * The displayName property
     */
    displayName?: string | null;
    /**
     * The hasPhysicalDevice property
     */
    hasPhysicalDevice?: boolean | null;
    /**
     * The manufacturer property
     */
    manufacturer?: string | null;
    /**
     * The model property
     */
    model?: string | null;
    /**
     * The physicalDeviceId property
     */
    physicalDeviceId?: string | null;
}
/**
 * Provides operations to call the create method.
 */
export interface CreateRequestBuilder extends BaseRequestBuilder<CreateRequestBuilder> {
    /**
     * Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer. For help creating the required Certificate Signing Request (CSR) for creating printer, see the CSR generation code sample.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/printer-create?view=graph-rest-1.0|Find more info here}
     */
     post(body: CreatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer. For help creating the required Certificate Signing Request (CSR) for creating printer, see the CSR generation code sample.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CreatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCreatePostRequestBody(createPostRequestBody: Partial<CreatePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { createPostRequestBody.backingStoreEnabled = true; },
        "certificateSigningRequest": n => { createPostRequestBody.certificateSigningRequest = n.getObjectValue<PrintCertificateSigningRequest>(createPrintCertificateSigningRequestFromDiscriminatorValue); },
        "connectorId": n => { createPostRequestBody.connectorId = n.getStringValue(); },
        "displayName": n => { createPostRequestBody.displayName = n.getStringValue(); },
        "hasPhysicalDevice": n => { createPostRequestBody.hasPhysicalDevice = n.getBooleanValue(); },
        "manufacturer": n => { createPostRequestBody.manufacturer = n.getStringValue(); },
        "model": n => { createPostRequestBody.model = n.getStringValue(); },
        "physicalDeviceId": n => { createPostRequestBody.physicalDeviceId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCreatePostRequestBody(writer: SerializationWriter, createPostRequestBody: Partial<CreatePostRequestBody> | undefined | null = {}) : void {
    if (createPostRequestBody) {
        writer.writeObjectValue<PrintCertificateSigningRequest>("certificateSigningRequest", createPostRequestBody.certificateSigningRequest, serializePrintCertificateSigningRequest);
        writer.writeStringValue("connectorId", createPostRequestBody.connectorId);
        writer.writeStringValue("displayName", createPostRequestBody.displayName);
        writer.writeBooleanValue("hasPhysicalDevice", createPostRequestBody.hasPhysicalDevice);
        writer.writeStringValue("manufacturer", createPostRequestBody.manufacturer);
        writer.writeStringValue("model", createPostRequestBody.model);
        writer.writeStringValue("physicalDeviceId", createPostRequestBody.physicalDeviceId);
        writer.writeAdditionalData(createPostRequestBody.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const CreateRequestBuilderUriTemplate = "{+baseurl}/print/printers/create";
/**
 * Metadata for all the requests in the request builder.
 */
export const CreateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CreateRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCreatePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
