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
 * @returns {HyperlinkPostRequestBody}
 */
// @ts-ignore
export function createHyperlinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoHyperlinkPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param HyperlinkPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoHyperlinkPostRequestBody(hyperlinkPostRequestBody: Partial<HyperlinkPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { hyperlinkPostRequestBody.backingStoreEnabled = true; },
        "friendlyName": n => { hyperlinkPostRequestBody.friendlyName = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "linkLocation": n => { hyperlinkPostRequestBody.linkLocation = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface HyperlinkPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The friendlyName property
     */
    friendlyName?: UntypedNode | null;
    /**
     * The linkLocation property
     */
    linkLocation?: UntypedNode | null;
}
/**
 * Provides operations to call the hyperlink method.
 */
export interface HyperlinkRequestBuilder extends BaseRequestBuilder<HyperlinkRequestBuilder> {
    /**
     * Invoke action hyperlink
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HyperlinkPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action hyperlink
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HyperlinkPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param HyperlinkPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeHyperlinkPostRequestBody(writer: SerializationWriter, hyperlinkPostRequestBody: Partial<HyperlinkPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!hyperlinkPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("friendlyName", hyperlinkPostRequestBody.friendlyName);
    writer.writeObjectValue("linkLocation", hyperlinkPostRequestBody.linkLocation);
    writer.writeAdditionalData(hyperlinkPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const HyperlinkRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/hyperlink";
/**
 * Metadata for all the requests in the request builder.
 */
export const HyperlinkRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: HyperlinkRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHyperlinkPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
