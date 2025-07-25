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
 * @returns {NperPostRequestBody}
 */
// @ts-ignore
export function createNperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNperPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param NperPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoNperPostRequestBody(nperPostRequestBody: Partial<NperPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { nperPostRequestBody.backingStoreEnabled = true; },
        "fv": n => { nperPostRequestBody.fv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "pmt": n => { nperPostRequestBody.pmt = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "pv": n => { nperPostRequestBody.pv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "rate": n => { nperPostRequestBody.rate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "type": n => { nperPostRequestBody.type = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface NperPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The fv property
     */
    fv?: UntypedNode | null;
    /**
     * The pmt property
     */
    pmt?: UntypedNode | null;
    /**
     * The pv property
     */
    pv?: UntypedNode | null;
    /**
     * The rate property
     */
    rate?: UntypedNode | null;
    /**
     * The type property
     */
    type?: UntypedNode | null;
}
/**
 * Provides operations to call the nper method.
 */
export interface NperRequestBuilder extends BaseRequestBuilder<NperRequestBuilder> {
    /**
     * Invoke action nper
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: NperPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action nper
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: NperPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param NperPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeNperPostRequestBody(writer: SerializationWriter, nperPostRequestBody: Partial<NperPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!nperPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("fv", nperPostRequestBody.fv);
    writer.writeObjectValue("pmt", nperPostRequestBody.pmt);
    writer.writeObjectValue("pv", nperPostRequestBody.pv);
    writer.writeObjectValue("rate", nperPostRequestBody.rate);
    writer.writeObjectValue("type", nperPostRequestBody.type);
    writer.writeAdditionalData(nperPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const NperRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/nper";
/**
 * Metadata for all the requests in the request builder.
 */
export const NperRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: NperRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNperPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
