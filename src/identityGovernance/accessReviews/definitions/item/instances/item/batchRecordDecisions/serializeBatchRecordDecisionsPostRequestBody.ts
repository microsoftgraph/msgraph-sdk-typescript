import {BatchRecordDecisionsPostRequestBody} from './batchRecordDecisionsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBatchRecordDecisionsPostRequestBody(batchRecordDecisionsPostRequestBody: BatchRecordDecisionsPostRequestBody | undefined = {} as BatchRecordDecisionsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("decision", batchRecordDecisionsPostRequestBody.decision);
        writer.writeStringValue("justification", batchRecordDecisionsPostRequestBody.justification);
        writer.writeStringValue("principalId", batchRecordDecisionsPostRequestBody.principalId);
        writer.writeStringValue("resourceId", batchRecordDecisionsPostRequestBody.resourceId);
        writer.writeAdditionalData(batchRecordDecisionsPostRequestBody.additionalData);
}
