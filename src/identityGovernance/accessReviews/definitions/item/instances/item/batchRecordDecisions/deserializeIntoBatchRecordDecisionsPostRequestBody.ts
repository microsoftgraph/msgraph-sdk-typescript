import { type BatchRecordDecisionsPostRequestBody } from './batchRecordDecisionsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBatchRecordDecisionsPostRequestBody(batchRecordDecisionsPostRequestBody: BatchRecordDecisionsPostRequestBody | undefined = {} as BatchRecordDecisionsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decision": n => { batchRecordDecisionsPostRequestBody.decision = n.getStringValue(); },
        "justification": n => { batchRecordDecisionsPostRequestBody.justification = n.getStringValue(); },
        "principalId": n => { batchRecordDecisionsPostRequestBody.principalId = n.getStringValue(); },
        "resourceId": n => { batchRecordDecisionsPostRequestBody.resourceId = n.getStringValue(); },
    }
}
