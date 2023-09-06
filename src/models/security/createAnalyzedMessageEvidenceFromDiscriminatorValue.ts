import { deserializeIntoAnalyzedMessageEvidence } from './deserializeIntoAnalyzedMessageEvidence';
import { type AnalyzedMessageEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAnalyzedMessageEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAnalyzedMessageEvidence;
}
