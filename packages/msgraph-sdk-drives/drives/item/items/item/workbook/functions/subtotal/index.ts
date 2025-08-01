/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SubtotalPostRequestBody}
 */
// @ts-ignore
export function createSubtotalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSubtotalPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SubtotalPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSubtotalPostRequestBody(subtotalPostRequestBody: Partial<SubtotalPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { subtotalPostRequestBody.backingStoreEnabled = true; },
        "functionNum": n => { subtotalPostRequestBody.functionNum = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "values": n => { subtotalPostRequestBody.values = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SubtotalPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSubtotalPostRequestBody(writer: SerializationWriter, subtotalPostRequestBody: Partial<SubtotalPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!subtotalPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("functionNum", subtotalPostRequestBody.functionNum);
    writer.writeObjectValue("values", subtotalPostRequestBody.values);
    writer.writeAdditionalData(subtotalPostRequestBody.additionalData);
}
export interface SubtotalPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The functionNum property
     */
    functionNum?: UntypedNode | null;
    /**
     * The values property
     */
    values?: UntypedNode | null;
}
/**
 * Provides operations to call the subtotal method.
 */
export interface SubtotalRequestBuilder extends BaseRequestBuilder<SubtotalRequestBuilder> {
    /**
     * Invoke action subtotal
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SubtotalPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action subtotal
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SubtotalPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SubtotalRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/subtotal";
/**
 * Metadata for all the requests in the request builder.
 */
export const SubtotalRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SubtotalRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSubtotalPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
