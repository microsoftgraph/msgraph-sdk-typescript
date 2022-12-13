import {FileEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileEvidence();
}
