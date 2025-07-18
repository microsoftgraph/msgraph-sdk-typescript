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
 * @returns {Norm_S_DistPostRequestBody}
 */
// @ts-ignore
export function createNorm_S_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNorm_S_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param Norm_S_DistPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoNorm_S_DistPostRequestBody(norm_S_DistPostRequestBody: Partial<Norm_S_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { norm_S_DistPostRequestBody.backingStoreEnabled = true; },
        "cumulative": n => { norm_S_DistPostRequestBody.cumulative = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "z": n => { norm_S_DistPostRequestBody.z = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface Norm_S_DistPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The cumulative property
     */
    cumulative?: UntypedNode | null;
    /**
     * The z property
     */
    z?: UntypedNode | null;
}
/**
 * Provides operations to call the norm_S_Dist method.
 */
export interface Norm_S_DistRequestBuilder extends BaseRequestBuilder<Norm_S_DistRequestBuilder> {
    /**
     * Invoke action norm_S_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Norm_S_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action norm_S_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Norm_S_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param Norm_S_DistPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeNorm_S_DistPostRequestBody(writer: SerializationWriter, norm_S_DistPostRequestBody: Partial<Norm_S_DistPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!norm_S_DistPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("cumulative", norm_S_DistPostRequestBody.cumulative);
    writer.writeObjectValue("z", norm_S_DistPostRequestBody.z);
    writer.writeAdditionalData(norm_S_DistPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Norm_S_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/norm_S_Dist";
/**
 * Metadata for all the requests in the request builder.
 */
export const Norm_S_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Norm_S_DistRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNorm_S_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
