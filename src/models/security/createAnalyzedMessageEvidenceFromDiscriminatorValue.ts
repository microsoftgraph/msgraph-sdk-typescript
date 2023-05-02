import {deserializeIntoAnalyzedMessageEvidence} from './deserializeIntoAnalyzedMessageEvidence';
import {AnalyzedMessageEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnalyzedMessageEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAnalyzedMessageEvidence;
}
