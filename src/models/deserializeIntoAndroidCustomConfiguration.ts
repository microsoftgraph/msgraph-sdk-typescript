import { type AndroidCustomConfiguration } from './androidCustomConfiguration';
import { createOmaSettingFromDiscriminatorValue } from './createOmaSettingFromDiscriminatorValue';
import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type OmaSetting } from './omaSetting';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidCustomConfiguration(androidCustomConfiguration: AndroidCustomConfiguration | undefined = {} as AndroidCustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidCustomConfiguration),
        "omaSettings": n => { androidCustomConfiguration.omaSettings = n.getCollectionOfObjectValues<OmaSetting>(createOmaSettingFromDiscriminatorValue); },
    }
}
