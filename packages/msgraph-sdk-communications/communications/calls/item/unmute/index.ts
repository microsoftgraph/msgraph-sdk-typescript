/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnmuteParticipantOperationFromDiscriminatorValue, serializeUnmuteParticipantOperation, type UnmuteParticipantOperation } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UnmutePostRequestBody}
 */
// @ts-ignore
export function createUnmutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUnmutePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param UnmutePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUnmutePostRequestBody(unmutePostRequestBody: Partial<UnmutePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { unmutePostRequestBody.backingStoreEnabled = true; },
        "clientContext": n => { unmutePostRequestBody.clientContext = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param UnmutePostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUnmutePostRequestBody(writer: SerializationWriter, unmutePostRequestBody: Partial<UnmutePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!unmutePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("clientContext", unmutePostRequestBody.clientContext);
    writer.writeAdditionalData(unmutePostRequestBody.additionalData);
}
export interface UnmutePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The clientContext property
     */
    clientContext?: string | null;
}
/**
 * Provides operations to call the unmute method.
 */
export interface UnmuteRequestBuilder extends BaseRequestBuilder<UnmuteRequestBuilder> {
    /**
     * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnmuteParticipantOperation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/call-unmute?view=graph-rest-1.0|Find more info here}
     */
     post(body: UnmutePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnmuteParticipantOperation | undefined>;
    /**
     * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UnmutePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UnmuteRequestBuilderUriTemplate = "{+baseurl}/communications/calls/{call%2Did}/unmute";
/**
 * Metadata for all the requests in the request builder.
 */
export const UnmuteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: UnmuteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnmuteParticipantOperationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnmutePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
