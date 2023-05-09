import {RegistryKeyEvidence} from './registryKeyEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistryKeyEvidence(writer: SerializationWriter, registryKeyEvidence: RegistryKeyEvidence | undefined = {} as RegistryKeyEvidence) : void {
        serializeAlertEvidence(writer, registryKeyEvidence)
        writer.writeStringValue("registryHive", registryKeyEvidence.registryHive);
        writer.writeStringValue("registryKey", registryKeyEvidence.registryKey);
}
