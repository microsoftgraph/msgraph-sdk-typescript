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
 * @returns {Oct2HexPostRequestBody}
 */
// @ts-ignore
export function createOct2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoOct2HexPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param Oct2HexPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoOct2HexPostRequestBody(oct2HexPostRequestBody: Partial<Oct2HexPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { oct2HexPostRequestBody.backingStoreEnabled = true; },
        "number": n => { oct2HexPostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "places": n => { oct2HexPostRequestBody.places = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface Oct2HexPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The number property
     */
    number?: UntypedNode | null;
    /**
     * The places property
     */
    places?: UntypedNode | null;
}
/**
 * Provides operations to call the oct2Hex method.
 */
export interface Oct2HexRequestBuilder extends BaseRequestBuilder<Oct2HexRequestBuilder> {
    /**
     * Invoke action oct2Hex
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Oct2HexPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action oct2Hex
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Oct2HexPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param Oct2HexPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeOct2HexPostRequestBody(writer: SerializationWriter, oct2HexPostRequestBody: Partial<Oct2HexPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!oct2HexPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("number", oct2HexPostRequestBody.number);
    writer.writeObjectValue("places", oct2HexPostRequestBody.places);
    writer.writeAdditionalData(oct2HexPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Oct2HexRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/oct2Hex";
/**
 * Metadata for all the requests in the request builder.
 */
export const Oct2HexRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Oct2HexRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOct2HexPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
