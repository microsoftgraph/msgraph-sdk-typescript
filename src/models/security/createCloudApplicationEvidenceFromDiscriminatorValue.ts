import {deserializeIntoCloudApplicationEvidence} from './deserializeIntoCloudApplicationEvidence';
import {CloudApplicationEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudApplicationEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudApplicationEvidence;
}
