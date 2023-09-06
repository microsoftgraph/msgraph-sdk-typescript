import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type RegistryKeyEvidence } from './registryKeyEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistryKeyEvidence(registryKeyEvidence: RegistryKeyEvidence | undefined = {} as RegistryKeyEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(registryKeyEvidence),
        "registryHive": n => { registryKeyEvidence.registryHive = n.getStringValue(); },
        "registryKey": n => { registryKeyEvidence.registryKey = n.getStringValue(); },
    }
}
