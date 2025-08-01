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
 * @returns {PercentRank_IncPostRequestBody}
 */
// @ts-ignore
export function createPercentRank_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPercentRank_IncPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param PercentRank_IncPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoPercentRank_IncPostRequestBody(percentRank_IncPostRequestBody: Partial<PercentRank_IncPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentRank_IncPostRequestBody.array = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "backingStoreEnabled": n => { percentRank_IncPostRequestBody.backingStoreEnabled = true; },
        "significance": n => { percentRank_IncPostRequestBody.significance = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "x": n => { percentRank_IncPostRequestBody.x = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface PercentRank_IncPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The array property
     */
    array?: UntypedNode | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The significance property
     */
    significance?: UntypedNode | null;
    /**
     * The x property
     */
    x?: UntypedNode | null;
}
/**
 * Provides operations to call the percentRank_Inc method.
 */
export interface PercentRank_IncRequestBuilder extends BaseRequestBuilder<PercentRank_IncRequestBuilder> {
    /**
     * Invoke action percentRank_Inc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: PercentRank_IncPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action percentRank_Inc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PercentRank_IncPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PercentRank_IncPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializePercentRank_IncPostRequestBody(writer: SerializationWriter, percentRank_IncPostRequestBody: Partial<PercentRank_IncPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!percentRank_IncPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("array", percentRank_IncPostRequestBody.array);
    writer.writeObjectValue("significance", percentRank_IncPostRequestBody.significance);
    writer.writeObjectValue("x", percentRank_IncPostRequestBody.x);
    writer.writeAdditionalData(percentRank_IncPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const PercentRank_IncRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/percentRank_Inc";
/**
 * Metadata for all the requests in the request builder.
 */
export const PercentRank_IncRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PercentRank_IncRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePercentRank_IncPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
