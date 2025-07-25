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
 * @returns {FvschedulePostRequestBody}
 */
// @ts-ignore
export function createFvschedulePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFvschedulePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param FvschedulePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFvschedulePostRequestBody(fvschedulePostRequestBody: Partial<FvschedulePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { fvschedulePostRequestBody.backingStoreEnabled = true; },
        "principal": n => { fvschedulePostRequestBody.principal = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "schedule": n => { fvschedulePostRequestBody.schedule = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface FvschedulePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The principal property
     */
    principal?: UntypedNode | null;
    /**
     * The schedule property
     */
    schedule?: UntypedNode | null;
}
/**
 * Provides operations to call the fvschedule method.
 */
export interface FvscheduleRequestBuilder extends BaseRequestBuilder<FvscheduleRequestBuilder> {
    /**
     * Invoke action fvschedule
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: FvschedulePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action fvschedule
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: FvschedulePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param FvschedulePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFvschedulePostRequestBody(writer: SerializationWriter, fvschedulePostRequestBody: Partial<FvschedulePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!fvschedulePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("principal", fvschedulePostRequestBody.principal);
    writer.writeObjectValue("schedule", fvschedulePostRequestBody.schedule);
    writer.writeAdditionalData(fvschedulePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const FvscheduleRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/fvschedule";
/**
 * Metadata for all the requests in the request builder.
 */
export const FvscheduleRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: FvscheduleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFvschedulePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
