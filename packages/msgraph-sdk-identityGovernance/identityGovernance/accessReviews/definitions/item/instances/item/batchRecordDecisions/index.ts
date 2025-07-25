/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface BatchRecordDecisionsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The decision property
     */
    decision?: string | null;
    /**
     * The justification property
     */
    justification?: string | null;
    /**
     * The principalId property
     */
    principalId?: string | null;
    /**
     * The resourceId property
     */
    resourceId?: string | null;
}
/**
 * Provides operations to call the batchRecordDecisions method.
 */
export interface BatchRecordDecisionsRequestBuilder extends BaseRequestBuilder<BatchRecordDecisionsRequestBuilder> {
    /**
     * Enables reviewers to review all accessReviewInstanceDecisionItem objects in batches by using principalId, resourceId, or neither.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewinstance-batchrecorddecisions?view=graph-rest-1.0|Find more info here}
     */
     post(body: BatchRecordDecisionsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Enables reviewers to review all accessReviewInstanceDecisionItem objects in batches by using principalId, resourceId, or neither.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: BatchRecordDecisionsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {BatchRecordDecisionsPostRequestBody}
 */
// @ts-ignore
export function createBatchRecordDecisionsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBatchRecordDecisionsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param BatchRecordDecisionsPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoBatchRecordDecisionsPostRequestBody(batchRecordDecisionsPostRequestBody: Partial<BatchRecordDecisionsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { batchRecordDecisionsPostRequestBody.backingStoreEnabled = true; },
        "decision": n => { batchRecordDecisionsPostRequestBody.decision = n.getStringValue(); },
        "justification": n => { batchRecordDecisionsPostRequestBody.justification = n.getStringValue(); },
        "principalId": n => { batchRecordDecisionsPostRequestBody.principalId = n.getStringValue(); },
        "resourceId": n => { batchRecordDecisionsPostRequestBody.resourceId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param BatchRecordDecisionsPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeBatchRecordDecisionsPostRequestBody(writer: SerializationWriter, batchRecordDecisionsPostRequestBody: Partial<BatchRecordDecisionsPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!batchRecordDecisionsPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("decision", batchRecordDecisionsPostRequestBody.decision);
    writer.writeStringValue("justification", batchRecordDecisionsPostRequestBody.justification);
    writer.writeStringValue("principalId", batchRecordDecisionsPostRequestBody.principalId);
    writer.writeStringValue("resourceId", batchRecordDecisionsPostRequestBody.resourceId);
    writer.writeAdditionalData(batchRecordDecisionsPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const BatchRecordDecisionsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/batchRecordDecisions";
/**
 * Metadata for all the requests in the request builder.
 */
export const BatchRecordDecisionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: BatchRecordDecisionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBatchRecordDecisionsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
