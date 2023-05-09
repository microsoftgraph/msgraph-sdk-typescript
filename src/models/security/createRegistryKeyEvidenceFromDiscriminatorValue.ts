import {deserializeIntoRegistryKeyEvidence} from './deserializeIntoRegistryKeyEvidence';
import {RegistryKeyEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryKeyEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRegistryKeyEvidence;
}
