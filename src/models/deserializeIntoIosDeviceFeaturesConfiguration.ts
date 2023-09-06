import { createIosHomeScreenItemFromDiscriminatorValue } from './createIosHomeScreenItemFromDiscriminatorValue';
import { createIosHomeScreenPageFromDiscriminatorValue } from './createIosHomeScreenPageFromDiscriminatorValue';
import { createIosNotificationSettingsFromDiscriminatorValue } from './createIosNotificationSettingsFromDiscriminatorValue';
import { deserializeIntoAppleDeviceFeaturesConfigurationBase } from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import { type IosDeviceFeaturesConfiguration } from './iosDeviceFeaturesConfiguration';
import { type IosHomeScreenItem } from './iosHomeScreenItem';
import { type IosHomeScreenPage } from './iosHomeScreenPage';
import { type IosNotificationSettings } from './iosNotificationSettings';
import { serializeIosHomeScreenItem } from './serializeIosHomeScreenItem';
import { serializeIosHomeScreenPage } from './serializeIosHomeScreenPage';
import { serializeIosNotificationSettings } from './serializeIosNotificationSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosDeviceFeaturesConfiguration(iosDeviceFeaturesConfiguration: IosDeviceFeaturesConfiguration | undefined = {} as IosDeviceFeaturesConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAppleDeviceFeaturesConfigurationBase(iosDeviceFeaturesConfiguration),
        "assetTagTemplate": n => { iosDeviceFeaturesConfiguration.assetTagTemplate = n.getStringValue(); },
        "homeScreenDockIcons": n => { iosDeviceFeaturesConfiguration.homeScreenDockIcons = n.getCollectionOfObjectValues<IosHomeScreenItem>(createIosHomeScreenItemFromDiscriminatorValue); },
        "homeScreenPages": n => { iosDeviceFeaturesConfiguration.homeScreenPages = n.getCollectionOfObjectValues<IosHomeScreenPage>(createIosHomeScreenPageFromDiscriminatorValue); },
        "lockScreenFootnote": n => { iosDeviceFeaturesConfiguration.lockScreenFootnote = n.getStringValue(); },
        "notificationSettings": n => { iosDeviceFeaturesConfiguration.notificationSettings = n.getCollectionOfObjectValues<IosNotificationSettings>(createIosNotificationSettingsFromDiscriminatorValue); },
    }
}
