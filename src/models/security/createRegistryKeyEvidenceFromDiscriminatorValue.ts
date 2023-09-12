import { deserializeIntoRegistryKeyEvidence } from './deserializeIntoRegistryKeyEvidence';
import { type RegistryKeyEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRegistryKeyEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRegistryKeyEvidence;
}
