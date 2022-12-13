import {RegistryValueEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryValueEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistryValueEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistryValueEvidence();
}
