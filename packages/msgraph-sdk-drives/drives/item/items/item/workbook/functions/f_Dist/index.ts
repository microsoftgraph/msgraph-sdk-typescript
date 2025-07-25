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
 * @returns {F_DistPostRequestBody}
 */
// @ts-ignore
export function createF_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoF_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param F_DistPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoF_DistPostRequestBody(f_DistPostRequestBody: Partial<F_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { f_DistPostRequestBody.backingStoreEnabled = true; },
        "cumulative": n => { f_DistPostRequestBody.cumulative = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "degFreedom1": n => { f_DistPostRequestBody.degFreedom1 = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "degFreedom2": n => { f_DistPostRequestBody.degFreedom2 = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "x": n => { f_DistPostRequestBody.x = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface F_DistPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The cumulative property
     */
    cumulative?: UntypedNode | null;
    /**
     * The degFreedom1 property
     */
    degFreedom1?: UntypedNode | null;
    /**
     * The degFreedom2 property
     */
    degFreedom2?: UntypedNode | null;
    /**
     * The x property
     */
    x?: UntypedNode | null;
}
/**
 * Provides operations to call the f_Dist method.
 */
export interface F_DistRequestBuilder extends BaseRequestBuilder<F_DistRequestBuilder> {
    /**
     * Invoke action f_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: F_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action f_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: F_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param F_DistPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeF_DistPostRequestBody(writer: SerializationWriter, f_DistPostRequestBody: Partial<F_DistPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!f_DistPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("cumulative", f_DistPostRequestBody.cumulative);
    writer.writeObjectValue("degFreedom1", f_DistPostRequestBody.degFreedom1);
    writer.writeObjectValue("degFreedom2", f_DistPostRequestBody.degFreedom2);
    writer.writeObjectValue("x", f_DistPostRequestBody.x);
    writer.writeAdditionalData(f_DistPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const F_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/f_Dist";
/**
 * Metadata for all the requests in the request builder.
 */
export const F_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: F_DistRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeF_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
