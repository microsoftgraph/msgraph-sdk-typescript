/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

export interface Ceiling_PrecisePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The number property
     */
    number?: UntypedNode | null;
    /**
     * The significance property
     */
    significance?: UntypedNode | null;
}
/**
 * Provides operations to call the ceiling_Precise method.
 */
export interface Ceiling_PreciseRequestBuilder extends BaseRequestBuilder<Ceiling_PreciseRequestBuilder> {
    /**
     * Invoke action ceiling_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Ceiling_PrecisePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action ceiling_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Ceiling_PrecisePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Ceiling_PrecisePostRequestBody}
 */
// @ts-ignore
export function createCeiling_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCeiling_PrecisePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param Ceiling_PrecisePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCeiling_PrecisePostRequestBody(ceiling_PrecisePostRequestBody: Partial<Ceiling_PrecisePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { ceiling_PrecisePostRequestBody.backingStoreEnabled = true; },
        "number": n => { ceiling_PrecisePostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "significance": n => { ceiling_PrecisePostRequestBody.significance = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param Ceiling_PrecisePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCeiling_PrecisePostRequestBody(writer: SerializationWriter, ceiling_PrecisePostRequestBody: Partial<Ceiling_PrecisePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!ceiling_PrecisePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("number", ceiling_PrecisePostRequestBody.number);
    writer.writeObjectValue("significance", ceiling_PrecisePostRequestBody.significance);
    writer.writeAdditionalData(ceiling_PrecisePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Ceiling_PreciseRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/ceiling_Precise";
/**
 * Metadata for all the requests in the request builder.
 */
export const Ceiling_PreciseRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Ceiling_PreciseRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCeiling_PrecisePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
