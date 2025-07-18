/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createItemPreviewInfoFromDiscriminatorValue, serializeItemPreviewInfo, type ItemPreviewInfo } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PreviewPostRequestBody}
 */
// @ts-ignore
export function createPreviewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPreviewPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param PreviewPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoPreviewPostRequestBody(previewPostRequestBody: Partial<PreviewPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { previewPostRequestBody.backingStoreEnabled = true; },
        "page": n => { previewPostRequestBody.page = n.getStringValue(); },
        "zoom": n => { previewPostRequestBody.zoom = n.getNumberValue(); },
    }
}
export interface PreviewPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The page property
     */
    page?: string | null;
    /**
     * The zoom property
     */
    zoom?: number | null;
}
/**
 * Provides operations to call the preview method.
 */
export interface PreviewRequestBuilder extends BaseRequestBuilder<PreviewRequestBuilder> {
    /**
     * Invoke action preview
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ItemPreviewInfo>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: PreviewPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ItemPreviewInfo | undefined>;
    /**
     * Invoke action preview
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PreviewPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PreviewPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializePreviewPostRequestBody(writer: SerializationWriter, previewPostRequestBody: Partial<PreviewPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!previewPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("page", previewPostRequestBody.page);
    writer.writeNumberValue("zoom", previewPostRequestBody.zoom);
    writer.writeAdditionalData(previewPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const PreviewRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/preview";
/**
 * Metadata for all the requests in the request builder.
 */
export const PreviewRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PreviewRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createItemPreviewInfoFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePreviewPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
