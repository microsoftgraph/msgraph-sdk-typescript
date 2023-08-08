import type {BatchRecordDecisionsPostRequestBody} from './batchRecordDecisionsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBatchRecordDecisionsPostRequestBody(writer: SerializationWriter, batchRecordDecisionsPostRequestBody: BatchRecordDecisionsPostRequestBody | undefined = {} as BatchRecordDecisionsPostRequestBody) : void {
        writer.writeStringValue("decision", batchRecordDecisionsPostRequestBody.decision);
        writer.writeStringValue("justification", batchRecordDecisionsPostRequestBody.justification);
        writer.writeStringValue("principalId", batchRecordDecisionsPostRequestBody.principalId);
        writer.writeStringValue("resourceId", batchRecordDecisionsPostRequestBody.resourceId);
        writer.writeAdditionalData(batchRecordDecisionsPostRequestBody.additionalData);
}
