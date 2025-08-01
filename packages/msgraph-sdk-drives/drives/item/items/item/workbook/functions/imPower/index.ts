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
 * @returns {ImPowerPostRequestBody}
 */
// @ts-ignore
export function createImPowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImPowerPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ImPowerPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImPowerPostRequestBody(imPowerPostRequestBody: Partial<ImPowerPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { imPowerPostRequestBody.backingStoreEnabled = true; },
        "inumber": n => { imPowerPostRequestBody.inumber = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "number": n => { imPowerPostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface ImPowerPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The inumber property
     */
    inumber?: UntypedNode | null;
    /**
     * The number property
     */
    number?: UntypedNode | null;
}
/**
 * Provides operations to call the imPower method.
 */
export interface ImPowerRequestBuilder extends BaseRequestBuilder<ImPowerRequestBuilder> {
    /**
     * Invoke action imPower
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ImPowerPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action imPower
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ImPowerPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param ImPowerPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImPowerPostRequestBody(writer: SerializationWriter, imPowerPostRequestBody: Partial<ImPowerPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!imPowerPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("inumber", imPowerPostRequestBody.inumber);
    writer.writeObjectValue("number", imPowerPostRequestBody.number);
    writer.writeAdditionalData(imPowerPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ImPowerRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/imPower";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImPowerRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ImPowerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImPowerPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
