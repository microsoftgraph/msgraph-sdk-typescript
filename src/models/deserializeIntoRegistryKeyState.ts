import {RegistryHive} from './registryHive';
import {RegistryKeyState} from './registryKeyState';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistryKeyState(registryKeyState: RegistryKeyState | undefined = {} as RegistryKeyState) : Record<string, (node: ParseNode) => void> {
    return {
        "hive": n => { registryKeyState.hive = n.getEnumValue<RegistryHive>(RegistryHive); },
        "key": n => { registryKeyState.key = n.getStringValue(); },
        "@odata.type": n => { registryKeyState.odataType = n.getStringValue(); },
        "oldKey": n => { registryKeyState.oldKey = n.getStringValue(); },
        "oldValueData": n => { registryKeyState.oldValueData = n.getStringValue(); },
        "oldValueName": n => { registryKeyState.oldValueName = n.getStringValue(); },
        "operation": n => { registryKeyState.operation = n.getEnumValue<RegistryOperation>(RegistryOperation); },
        "processId": n => { registryKeyState.processId = n.getNumberValue(); },
        "valueData": n => { registryKeyState.valueData = n.getStringValue(); },
        "valueName": n => { registryKeyState.valueName = n.getStringValue(); },
        "valueType": n => { registryKeyState.valueType = n.getEnumValue<RegistryValueType>(RegistryValueType); },
    }
}
