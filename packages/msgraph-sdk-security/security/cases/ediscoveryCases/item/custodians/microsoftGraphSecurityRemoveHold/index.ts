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
 * @returns {RemoveHoldPostRequestBody}
 */
// @ts-ignore
export function createRemoveHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRemoveHoldPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param RemoveHoldPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRemoveHoldPostRequestBody(removeHoldPostRequestBody: Partial<RemoveHoldPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { removeHoldPostRequestBody.backingStoreEnabled = true; },
        "ids": n => { removeHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * Provides operations to call the removeHold method.
 */
export interface MicrosoftGraphSecurityRemoveHoldRequestBuilder extends BaseRequestBuilder<MicrosoftGraphSecurityRemoveHoldRequestBuilder> {
    /**
     * Invoke action removeHold
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RemoveHoldPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action removeHold
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RemoveHoldPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
export interface RemoveHoldPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The ids property
     */
    ids?: string[] | null;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RemoveHoldPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRemoveHoldPostRequestBody(writer: SerializationWriter, removeHoldPostRequestBody: Partial<RemoveHoldPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!removeHoldPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("ids", removeHoldPostRequestBody.ids);
    writer.writeAdditionalData(removeHoldPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphSecurityRemoveHoldRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/microsoft.graph.security.removeHold";
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphSecurityRemoveHoldRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MicrosoftGraphSecurityRemoveHoldRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRemoveHoldPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
