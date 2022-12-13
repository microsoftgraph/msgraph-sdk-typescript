import {AnalyzedMessageEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnalyzedMessageEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnalyzedMessageEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnalyzedMessageEvidence();
}
