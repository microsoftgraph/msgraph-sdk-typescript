/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

export interface BitrshiftPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The number property
     */
    number?: UntypedNode | null;
    /**
     * The shiftAmount property
     */
    shiftAmount?: UntypedNode | null;
}
/**
 * Provides operations to call the bitrshift method.
 */
export interface BitrshiftRequestBuilder extends BaseRequestBuilder<BitrshiftRequestBuilder> {
    /**
     * Invoke action bitrshift
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: BitrshiftPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action bitrshift
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: BitrshiftPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {BitrshiftPostRequestBody}
 */
// @ts-ignore
export function createBitrshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBitrshiftPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param BitrshiftPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoBitrshiftPostRequestBody(bitrshiftPostRequestBody: Partial<BitrshiftPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { bitrshiftPostRequestBody.backingStoreEnabled = true; },
        "number": n => { bitrshiftPostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "shiftAmount": n => { bitrshiftPostRequestBody.shiftAmount = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param BitrshiftPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeBitrshiftPostRequestBody(writer: SerializationWriter, bitrshiftPostRequestBody: Partial<BitrshiftPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!bitrshiftPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("number", bitrshiftPostRequestBody.number);
    writer.writeObjectValue("shiftAmount", bitrshiftPostRequestBody.shiftAmount);
    writer.writeAdditionalData(bitrshiftPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const BitrshiftRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/bitrshift";
/**
 * Metadata for all the requests in the request builder.
 */
export const BitrshiftRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: BitrshiftRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBitrshiftPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
