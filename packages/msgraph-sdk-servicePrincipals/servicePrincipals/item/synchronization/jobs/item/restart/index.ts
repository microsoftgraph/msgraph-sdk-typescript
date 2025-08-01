/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSynchronizationJobRestartCriteriaFromDiscriminatorValue, serializeSynchronizationJobRestartCriteria, type SynchronizationJobRestartCriteria } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RestartPostRequestBody}
 */
// @ts-ignore
export function createRestartPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRestartPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param RestartPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRestartPostRequestBody(restartPostRequestBody: Partial<RestartPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { restartPostRequestBody.backingStoreEnabled = true; },
        "criteria": n => { restartPostRequestBody.criteria = n.getObjectValue<SynchronizationJobRestartCriteria>(createSynchronizationJobRestartCriteriaFromDiscriminatorValue); },
    }
}
export interface RestartPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The criteria property
     */
    criteria?: SynchronizationJobRestartCriteria | null;
}
/**
 * Provides operations to call the restart method.
 */
export interface RestartRequestBuilder extends BaseRequestBuilder<RestartRequestBuilder> {
    /**
     * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationjob-restart?view=graph-rest-1.0|Find more info here}
     */
     post(body: RestartPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RestartPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RestartPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRestartPostRequestBody(writer: SerializationWriter, restartPostRequestBody: Partial<RestartPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!restartPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue<SynchronizationJobRestartCriteria>("criteria", restartPostRequestBody.criteria, serializeSynchronizationJobRestartCriteria);
    writer.writeAdditionalData(restartPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RestartRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/jobs/{synchronizationJob%2Did}/restart";
/**
 * Metadata for all the requests in the request builder.
 */
export const RestartRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RestartRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRestartPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
