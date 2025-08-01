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
 * @returns {PmtPostRequestBody}
 */
// @ts-ignore
export function createPmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPmtPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param PmtPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoPmtPostRequestBody(pmtPostRequestBody: Partial<PmtPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { pmtPostRequestBody.backingStoreEnabled = true; },
        "fv": n => { pmtPostRequestBody.fv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "nper": n => { pmtPostRequestBody.nper = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "pv": n => { pmtPostRequestBody.pv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "rate": n => { pmtPostRequestBody.rate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "type": n => { pmtPostRequestBody.type = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface PmtPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The fv property
     */
    fv?: UntypedNode | null;
    /**
     * The nper property
     */
    nper?: UntypedNode | null;
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
 * Provides operations to call the pmt method.
 */
export interface PmtRequestBuilder extends BaseRequestBuilder<PmtRequestBuilder> {
    /**
     * Invoke action pmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: PmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action pmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PmtPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializePmtPostRequestBody(writer: SerializationWriter, pmtPostRequestBody: Partial<PmtPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!pmtPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("fv", pmtPostRequestBody.fv);
    writer.writeObjectValue("nper", pmtPostRequestBody.nper);
    writer.writeObjectValue("pv", pmtPostRequestBody.pv);
    writer.writeObjectValue("rate", pmtPostRequestBody.rate);
    writer.writeObjectValue("type", pmtPostRequestBody.type);
    writer.writeAdditionalData(pmtPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const PmtRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/pmt";
/**
 * Metadata for all the requests in the request builder.
 */
export const PmtRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PmtRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePmtPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
