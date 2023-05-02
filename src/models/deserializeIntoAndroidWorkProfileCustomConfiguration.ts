import {AndroidWorkProfileCustomConfiguration} from './androidWorkProfileCustomConfiguration';
import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {OmaSetting} from './omaSetting';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCustomConfiguration(androidWorkProfileCustomConfiguration: AndroidWorkProfileCustomConfiguration | undefined = {} as AndroidWorkProfileCustomConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidWorkProfileCustomConfiguration),
        "omaSettings": n => { androidWorkProfileCustomConfiguration.omaSettings = n.getCollectionOfObjectValues<OmaSetting>(createOmaSettingFromDiscriminatorValue); },
    }
}
