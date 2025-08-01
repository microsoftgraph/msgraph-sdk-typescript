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
 * @returns {SetExternalEventInformationPostRequestBody}
 */
// @ts-ignore
export function createSetExternalEventInformationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSetExternalEventInformationPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SetExternalEventInformationPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSetExternalEventInformationPostRequestBody(setExternalEventInformationPostRequestBody: Partial<SetExternalEventInformationPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { setExternalEventInformationPostRequestBody.backingStoreEnabled = true; },
        "externalEventId": n => { setExternalEventInformationPostRequestBody.externalEventId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SetExternalEventInformationPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSetExternalEventInformationPostRequestBody(writer: SerializationWriter, setExternalEventInformationPostRequestBody: Partial<SetExternalEventInformationPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!setExternalEventInformationPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("externalEventId", setExternalEventInformationPostRequestBody.externalEventId);
    writer.writeAdditionalData(setExternalEventInformationPostRequestBody.additionalData);
}
export interface SetExternalEventInformationPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The externalEventId property
     */
    externalEventId?: string | null;
}
/**
 * Provides operations to call the setExternalEventInformation method.
 */
export interface SetExternalEventInformationRequestBuilder extends BaseRequestBuilder<SetExternalEventInformationRequestBuilder> {
    /**
     * Invoke action setExternalEventInformation
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SetExternalEventInformationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action setExternalEventInformation
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SetExternalEventInformationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SetExternalEventInformationRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/events/{virtualEvent%2Did}/setExternalEventInformation";
/**
 * Metadata for all the requests in the request builder.
 */
export const SetExternalEventInformationRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SetExternalEventInformationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSetExternalEventInformationPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
