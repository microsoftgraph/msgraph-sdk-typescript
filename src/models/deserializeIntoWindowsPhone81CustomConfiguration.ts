import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {OmaSetting} from './omaSetting';
import {serializeOmaSetting} from './serializeOmaSetting';
import {WindowsPhone81CustomConfiguration} from './windowsPhone81CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81CustomConfiguration(windowsPhone81CustomConfiguration: WindowsPhone81CustomConfiguration | undefined = {} as WindowsPhone81CustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsPhone81CustomConfiguration),
        "omaSettings": n => { windowsPhone81CustomConfiguration.omaSettings = n.getCollectionOfObjectValues<OmaSetting>(createOmaSettingFromDiscriminatorValue); },
    }
}
