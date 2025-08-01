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
 * @returns {Floor_PrecisePostRequestBody}
 */
// @ts-ignore
export function createFloor_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFloor_PrecisePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param Floor_PrecisePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFloor_PrecisePostRequestBody(floor_PrecisePostRequestBody: Partial<Floor_PrecisePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { floor_PrecisePostRequestBody.backingStoreEnabled = true; },
        "number": n => { floor_PrecisePostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "significance": n => { floor_PrecisePostRequestBody.significance = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface Floor_PrecisePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the floor_Precise method.
 */
export interface Floor_PreciseRequestBuilder extends BaseRequestBuilder<Floor_PreciseRequestBuilder> {
    /**
     * Invoke action floor_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Floor_PrecisePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action floor_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Floor_PrecisePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param Floor_PrecisePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFloor_PrecisePostRequestBody(writer: SerializationWriter, floor_PrecisePostRequestBody: Partial<Floor_PrecisePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!floor_PrecisePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("number", floor_PrecisePostRequestBody.number);
    writer.writeObjectValue("significance", floor_PrecisePostRequestBody.significance);
    writer.writeAdditionalData(floor_PrecisePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Floor_PreciseRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/floor_Precise";
/**
 * Metadata for all the requests in the request builder.
 */
export const Floor_PreciseRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Floor_PreciseRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFloor_PrecisePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
