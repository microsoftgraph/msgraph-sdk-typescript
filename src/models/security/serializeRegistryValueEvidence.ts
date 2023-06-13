import {RegistryValueEvidence} from './registryValueEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistryValueEvidence(writer: SerializationWriter, registryValueEvidence: RegistryValueEvidence | undefined = {} as RegistryValueEvidence) : void {
        serializeAlertEvidence(writer, registryValueEvidence)
        writer.writeStringValue("mdeDeviceId", registryValueEvidence.mdeDeviceId);
        writer.writeStringValue("registryHive", registryValueEvidence.registryHive);
        writer.writeStringValue("registryKey", registryValueEvidence.registryKey);
        writer.writeStringValue("registryValue", registryValueEvidence.registryValue);
        writer.writeStringValue("registryValueName", registryValueEvidence.registryValueName);
        writer.writeStringValue("registryValueType", registryValueEvidence.registryValueType);
}
