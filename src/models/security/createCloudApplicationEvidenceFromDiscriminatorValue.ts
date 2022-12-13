import {CloudApplicationEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudApplicationEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudApplicationEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudApplicationEvidence();
}
