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
 * @returns {TrimMeanPostRequestBody}
 */
// @ts-ignore
export function createTrimMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTrimMeanPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param TrimMeanPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTrimMeanPostRequestBody(trimMeanPostRequestBody: Partial<TrimMeanPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { trimMeanPostRequestBody.array = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "backingStoreEnabled": n => { trimMeanPostRequestBody.backingStoreEnabled = true; },
        "percent": n => { trimMeanPostRequestBody.percent = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param TrimMeanPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTrimMeanPostRequestBody(writer: SerializationWriter, trimMeanPostRequestBody: Partial<TrimMeanPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!trimMeanPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("array", trimMeanPostRequestBody.array);
    writer.writeObjectValue("percent", trimMeanPostRequestBody.percent);
    writer.writeAdditionalData(trimMeanPostRequestBody.additionalData);
}
export interface TrimMeanPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The array property
     */
    array?: UntypedNode | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The percent property
     */
    percent?: UntypedNode | null;
}
/**
 * Provides operations to call the trimMean method.
 */
export interface TrimMeanRequestBuilder extends BaseRequestBuilder<TrimMeanRequestBuilder> {
    /**
     * Invoke action trimMean
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TrimMeanPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action trimMean
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TrimMeanPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const TrimMeanRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/trimMean";
/**
 * Metadata for all the requests in the request builder.
 */
export const TrimMeanRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: TrimMeanRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTrimMeanPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
