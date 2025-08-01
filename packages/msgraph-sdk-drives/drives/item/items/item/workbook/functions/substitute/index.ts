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
 * @returns {SubstitutePostRequestBody}
 */
// @ts-ignore
export function createSubstitutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSubstitutePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SubstitutePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSubstitutePostRequestBody(substitutePostRequestBody: Partial<SubstitutePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { substitutePostRequestBody.backingStoreEnabled = true; },
        "instanceNum": n => { substitutePostRequestBody.instanceNum = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "newText": n => { substitutePostRequestBody.newText = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "oldText": n => { substitutePostRequestBody.oldText = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "text": n => { substitutePostRequestBody.text = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SubstitutePostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSubstitutePostRequestBody(writer: SerializationWriter, substitutePostRequestBody: Partial<SubstitutePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!substitutePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("instanceNum", substitutePostRequestBody.instanceNum);
    writer.writeObjectValue("newText", substitutePostRequestBody.newText);
    writer.writeObjectValue("oldText", substitutePostRequestBody.oldText);
    writer.writeObjectValue("text", substitutePostRequestBody.text);
    writer.writeAdditionalData(substitutePostRequestBody.additionalData);
}
export interface SubstitutePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The instanceNum property
     */
    instanceNum?: UntypedNode | null;
    /**
     * The newText property
     */
    newText?: UntypedNode | null;
    /**
     * The oldText property
     */
    oldText?: UntypedNode | null;
    /**
     * The text property
     */
    text?: UntypedNode | null;
}
/**
 * Provides operations to call the substitute method.
 */
export interface SubstituteRequestBuilder extends BaseRequestBuilder<SubstituteRequestBuilder> {
    /**
     * Invoke action substitute
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SubstitutePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action substitute
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SubstitutePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SubstituteRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/substitute";
/**
 * Metadata for all the requests in the request builder.
 */
export const SubstituteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SubstituteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSubstitutePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
