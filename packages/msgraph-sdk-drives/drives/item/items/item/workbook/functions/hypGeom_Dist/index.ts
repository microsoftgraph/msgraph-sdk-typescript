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
 * @returns {HypGeom_DistPostRequestBody}
 */
// @ts-ignore
export function createHypGeom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoHypGeom_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param HypGeom_DistPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoHypGeom_DistPostRequestBody(hypGeom_DistPostRequestBody: Partial<HypGeom_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { hypGeom_DistPostRequestBody.backingStoreEnabled = true; },
        "cumulative": n => { hypGeom_DistPostRequestBody.cumulative = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "numberPop": n => { hypGeom_DistPostRequestBody.numberPop = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "numberSample": n => { hypGeom_DistPostRequestBody.numberSample = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "populationS": n => { hypGeom_DistPostRequestBody.populationS = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "sampleS": n => { hypGeom_DistPostRequestBody.sampleS = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface HypGeom_DistPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The cumulative property
     */
    cumulative?: UntypedNode | null;
    /**
     * The numberPop property
     */
    numberPop?: UntypedNode | null;
    /**
     * The numberSample property
     */
    numberSample?: UntypedNode | null;
    /**
     * The populationS property
     */
    populationS?: UntypedNode | null;
    /**
     * The sampleS property
     */
    sampleS?: UntypedNode | null;
}
/**
 * Provides operations to call the hypGeom_Dist method.
 */
export interface HypGeom_DistRequestBuilder extends BaseRequestBuilder<HypGeom_DistRequestBuilder> {
    /**
     * Invoke action hypGeom_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HypGeom_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action hypGeom_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HypGeom_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param HypGeom_DistPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeHypGeom_DistPostRequestBody(writer: SerializationWriter, hypGeom_DistPostRequestBody: Partial<HypGeom_DistPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!hypGeom_DistPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("cumulative", hypGeom_DistPostRequestBody.cumulative);
    writer.writeObjectValue("numberPop", hypGeom_DistPostRequestBody.numberPop);
    writer.writeObjectValue("numberSample", hypGeom_DistPostRequestBody.numberSample);
    writer.writeObjectValue("populationS", hypGeom_DistPostRequestBody.populationS);
    writer.writeObjectValue("sampleS", hypGeom_DistPostRequestBody.sampleS);
    writer.writeAdditionalData(hypGeom_DistPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const HypGeom_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/hypGeom_Dist";
/**
 * Metadata for all the requests in the request builder.
 */
export const HypGeom_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: HypGeom_DistRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHypGeom_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
