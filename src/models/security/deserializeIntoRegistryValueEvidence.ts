import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type RegistryValueEvidence } from './registryValueEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistryValueEvidence(registryValueEvidence: RegistryValueEvidence | undefined = {} as RegistryValueEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(registryValueEvidence),
        "mdeDeviceId": n => { registryValueEvidence.mdeDeviceId = n.getStringValue(); },
        "registryHive": n => { registryValueEvidence.registryHive = n.getStringValue(); },
        "registryKey": n => { registryValueEvidence.registryKey = n.getStringValue(); },
        "registryValue": n => { registryValueEvidence.registryValue = n.getStringValue(); },
        "registryValueName": n => { registryValueEvidence.registryValueName = n.getStringValue(); },
        "registryValueType": n => { registryValueEvidence.registryValueType = n.getStringValue(); },
    }
}
