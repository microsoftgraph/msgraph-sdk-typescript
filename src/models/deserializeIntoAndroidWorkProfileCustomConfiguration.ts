import { type AndroidWorkProfileCustomConfiguration } from './androidWorkProfileCustomConfiguration';
import { createOmaSettingFromDiscriminatorValue } from './createOmaSettingFromDiscriminatorValue';
import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type OmaSetting } from './omaSetting';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCustomConfiguration(androidWorkProfileCustomConfiguration: AndroidWorkProfileCustomConfiguration | undefined = {} as AndroidWorkProfileCustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidWorkProfileCustomConfiguration),
        "omaSettings": n => { androidWorkProfileCustomConfiguration.omaSettings = n.getCollectionOfObjectValues<OmaSetting>(createOmaSettingFromDiscriminatorValue); },
    }
}
