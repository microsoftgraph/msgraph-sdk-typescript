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
 * @returns {ImaginaryPostRequestBody}
 */
// @ts-ignore
export function createImaginaryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImaginaryPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ImaginaryPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImaginaryPostRequestBody(imaginaryPostRequestBody: Partial<ImaginaryPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { imaginaryPostRequestBody.backingStoreEnabled = true; },
        "inumber": n => { imaginaryPostRequestBody.inumber = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface ImaginaryPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The inumber property
     */
    inumber?: UntypedNode | null;
}
/**
 * Provides operations to call the imaginary method.
 */
export interface ImaginaryRequestBuilder extends BaseRequestBuilder<ImaginaryRequestBuilder> {
    /**
     * Invoke action imaginary
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ImaginaryPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action imaginary
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ImaginaryPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param ImaginaryPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImaginaryPostRequestBody(writer: SerializationWriter, imaginaryPostRequestBody: Partial<ImaginaryPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!imaginaryPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("inumber", imaginaryPostRequestBody.inumber);
    writer.writeAdditionalData(imaginaryPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ImaginaryRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/imaginary";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImaginaryRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ImaginaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImaginaryPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
