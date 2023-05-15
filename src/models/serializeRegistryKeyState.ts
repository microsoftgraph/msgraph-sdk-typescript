import {RegistryHive} from './registryHive';
import {RegistryKeyState} from './registryKeyState';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistryKeyState(writer: SerializationWriter, registryKeyState: RegistryKeyState | undefined = {} as RegistryKeyState) : void {
        writer.writeEnumValue<RegistryHive>("hive", registryKeyState.hive);
        writer.writeStringValue("key", registryKeyState.key);
        writer.writeStringValue("@odata.type", registryKeyState.odataType);
        writer.writeStringValue("oldKey", registryKeyState.oldKey);
        writer.writeStringValue("oldValueData", registryKeyState.oldValueData);
        writer.writeStringValue("oldValueName", registryKeyState.oldValueName);
        writer.writeEnumValue<RegistryOperation>("operation", registryKeyState.operation);
        writer.writeNumberValue("processId", registryKeyState.processId);
        writer.writeStringValue("valueData", registryKeyState.valueData);
        writer.writeStringValue("valueName", registryKeyState.valueName);
        writer.writeEnumValue<RegistryValueType>("valueType", registryKeyState.valueType);
        writer.writeAdditionalData(registryKeyState.additionalData);
}
