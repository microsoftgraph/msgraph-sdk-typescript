/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveItemFromDiscriminatorValue, createItemReferenceFromDiscriminatorValue, serializeDriveItem, serializeItemReference, type DriveItem, type ItemReference } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CopyPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The childrenOnly property
     */
    childrenOnly?: boolean | null;
    /**
     * The includeAllVersionHistory property
     */
    includeAllVersionHistory?: boolean | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The parentReference property
     */
    parentReference?: ItemReference | null;
}
/**
 * Provides operations to call the copy method.
 */
export interface CopyRequestBuilder extends BaseRequestBuilder<CopyRequestBuilder> {
    /**
     * Invoke action copy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CopyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Invoke action copy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CopyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CopyPostRequestBody}
 */
// @ts-ignore
export function createCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCopyPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param CopyPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: Partial<CopyPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { copyPostRequestBody.backingStoreEnabled = true; },
        "childrenOnly": n => { copyPostRequestBody.childrenOnly = n.getBooleanValue(); },
        "includeAllVersionHistory": n => { copyPostRequestBody.includeAllVersionHistory = n.getBooleanValue(); },
        "name": n => { copyPostRequestBody.name = n.getStringValue(); },
        "parentReference": n => { copyPostRequestBody.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param CopyPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: Partial<CopyPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!copyPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("childrenOnly", copyPostRequestBody.childrenOnly);
    writer.writeBooleanValue("includeAllVersionHistory", copyPostRequestBody.includeAllVersionHistory);
    writer.writeStringValue("name", copyPostRequestBody.name);
    writer.writeObjectValue<ItemReference>("parentReference", copyPostRequestBody.parentReference, serializeItemReference);
    writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CopyRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/copy";
/**
 * Metadata for all the requests in the request builder.
 */
export const CopyRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CopyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCopyPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
