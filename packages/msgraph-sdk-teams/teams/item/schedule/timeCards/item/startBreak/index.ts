/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createItemBodyFromDiscriminatorValue, createTimeCardFromDiscriminatorValue, serializeItemBody, serializeTimeCard, type ItemBody, type TimeCard } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {StartBreakPostRequestBody}
 */
// @ts-ignore
export function createStartBreakPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoStartBreakPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param StartBreakPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoStartBreakPostRequestBody(startBreakPostRequestBody: Partial<StartBreakPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { startBreakPostRequestBody.backingStoreEnabled = true; },
        "isAtApprovedLocation": n => { startBreakPostRequestBody.isAtApprovedLocation = n.getBooleanValue(); },
        "notes": n => { startBreakPostRequestBody.notes = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param StartBreakPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeStartBreakPostRequestBody(writer: SerializationWriter, startBreakPostRequestBody: Partial<StartBreakPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!startBreakPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("isAtApprovedLocation", startBreakPostRequestBody.isAtApprovedLocation);
    writer.writeObjectValue<ItemBody>("notes", startBreakPostRequestBody.notes, serializeItemBody);
    writer.writeAdditionalData(startBreakPostRequestBody.additionalData);
}
export interface StartBreakPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The isAtApprovedLocation property
     */
    isAtApprovedLocation?: boolean | null;
    /**
     * The notes property
     */
    notes?: ItemBody | null;
}
/**
 * Provides operations to call the startBreak method.
 */
export interface StartBreakRequestBuilder extends BaseRequestBuilder<StartBreakRequestBuilder> {
    /**
     * Invoke action startBreak
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TimeCard>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: StartBreakPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TimeCard | undefined>;
    /**
     * Invoke action startBreak
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: StartBreakPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const StartBreakRequestBuilderUriTemplate = "{+baseurl}/teams/{team%2Did}/schedule/timeCards/{timeCard%2Did}/startBreak";
/**
 * Metadata for all the requests in the request builder.
 */
export const StartBreakRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: StartBreakRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTimeCardFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeStartBreakPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
