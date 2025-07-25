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
 * @returns {ReceivedPostRequestBody}
 */
// @ts-ignore
export function createReceivedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoReceivedPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ReceivedPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoReceivedPostRequestBody(receivedPostRequestBody: Partial<ReceivedPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { receivedPostRequestBody.backingStoreEnabled = true; },
        "basis": n => { receivedPostRequestBody.basis = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "discount": n => { receivedPostRequestBody.discount = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "investment": n => { receivedPostRequestBody.investment = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "maturity": n => { receivedPostRequestBody.maturity = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "settlement": n => { receivedPostRequestBody.settlement = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface ReceivedPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The basis property
     */
    basis?: UntypedNode | null;
    /**
     * The discount property
     */
    discount?: UntypedNode | null;
    /**
     * The investment property
     */
    investment?: UntypedNode | null;
    /**
     * The maturity property
     */
    maturity?: UntypedNode | null;
    /**
     * The settlement property
     */
    settlement?: UntypedNode | null;
}
/**
 * Provides operations to call the received method.
 */
export interface ReceivedRequestBuilder extends BaseRequestBuilder<ReceivedRequestBuilder> {
    /**
     * Invoke action received
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ReceivedPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action received
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ReceivedPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ReceivedPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeReceivedPostRequestBody(writer: SerializationWriter, receivedPostRequestBody: Partial<ReceivedPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!receivedPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("basis", receivedPostRequestBody.basis);
    writer.writeObjectValue("discount", receivedPostRequestBody.discount);
    writer.writeObjectValue("investment", receivedPostRequestBody.investment);
    writer.writeObjectValue("maturity", receivedPostRequestBody.maturity);
    writer.writeObjectValue("settlement", receivedPostRequestBody.settlement);
    writer.writeAdditionalData(receivedPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ReceivedRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/received";
/**
 * Metadata for all the requests in the request builder.
 */
export const ReceivedRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ReceivedRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeReceivedPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
