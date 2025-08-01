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
 * @returns {F_Inv_RTPostRequestBody}
 */
// @ts-ignore
export function createF_Inv_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoF_Inv_RTPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param F_Inv_RTPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoF_Inv_RTPostRequestBody(f_Inv_RTPostRequestBody: Partial<F_Inv_RTPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { f_Inv_RTPostRequestBody.backingStoreEnabled = true; },
        "degFreedom1": n => { f_Inv_RTPostRequestBody.degFreedom1 = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "degFreedom2": n => { f_Inv_RTPostRequestBody.degFreedom2 = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "probability": n => { f_Inv_RTPostRequestBody.probability = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface F_Inv_RTPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The degFreedom1 property
     */
    degFreedom1?: UntypedNode | null;
    /**
     * The degFreedom2 property
     */
    degFreedom2?: UntypedNode | null;
    /**
     * The probability property
     */
    probability?: UntypedNode | null;
}
/**
 * Provides operations to call the f_Inv_RT method.
 */
export interface F_Inv_RTRequestBuilder extends BaseRequestBuilder<F_Inv_RTRequestBuilder> {
    /**
     * Invoke action f_Inv_RT
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: F_Inv_RTPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action f_Inv_RT
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: F_Inv_RTPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param F_Inv_RTPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeF_Inv_RTPostRequestBody(writer: SerializationWriter, f_Inv_RTPostRequestBody: Partial<F_Inv_RTPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!f_Inv_RTPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("degFreedom1", f_Inv_RTPostRequestBody.degFreedom1);
    writer.writeObjectValue("degFreedom2", f_Inv_RTPostRequestBody.degFreedom2);
    writer.writeObjectValue("probability", f_Inv_RTPostRequestBody.probability);
    writer.writeAdditionalData(f_Inv_RTPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const F_Inv_RTRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/f_Inv_RT";
/**
 * Metadata for all the requests in the request builder.
 */
export const F_Inv_RTRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: F_Inv_RTRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeF_Inv_RTPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
