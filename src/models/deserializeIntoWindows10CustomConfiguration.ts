import { createOmaSettingFromDiscriminatorValue } from './createOmaSettingFromDiscriminatorValue';
import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type OmaSetting } from './omaSetting';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Windows10CustomConfiguration } from './windows10CustomConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10CustomConfiguration(windows10CustomConfiguration: Windows10CustomConfiguration | undefined = {} as Windows10CustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10CustomConfiguration),
        "omaSettings": n => { windows10CustomConfiguration.omaSettings = n.getCollectionOfObjectValues<OmaSetting>(createOmaSettingFromDiscriminatorValue); },
    }
}
