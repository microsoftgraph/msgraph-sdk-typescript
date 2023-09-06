import { type RegistryKeyEvidence } from './registryKeyEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRegistryKeyEvidence(writer: SerializationWriter, registryKeyEvidence: RegistryKeyEvidence | undefined = {} as RegistryKeyEvidence) : void {
        serializeAlertEvidence(writer, registryKeyEvidence)
        writer.writeStringValue("registryHive", registryKeyEvidence.registryHive);
        writer.writeStringValue("registryKey", registryKeyEvidence.registryKey);
}
