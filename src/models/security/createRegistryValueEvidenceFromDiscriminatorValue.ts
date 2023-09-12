import { deserializeIntoRegistryValueEvidence } from './deserializeIntoRegistryValueEvidence';
import { type RegistryValueEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRegistryValueEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRegistryValueEvidence;
}
