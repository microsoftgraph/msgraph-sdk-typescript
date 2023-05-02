import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {RegistryKeyEvidence} from './registryKeyEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistryKeyEvidence(registryKeyEvidence: RegistryKeyEvidence | undefined = {} as RegistryKeyEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(registryKeyEvidence),
        "registryHive": n => { registryKeyEvidence.registryHive = n.getStringValue(); },
        "registryKey": n => { registryKeyEvidence.registryKey = n.getStringValue(); },
    }
}
