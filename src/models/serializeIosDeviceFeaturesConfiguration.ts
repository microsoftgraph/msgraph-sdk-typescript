import { type IosDeviceFeaturesConfiguration } from './iosDeviceFeaturesConfiguration';
import { type IosHomeScreenItem } from './iosHomeScreenItem';
import { type IosHomeScreenPage } from './iosHomeScreenPage';
import { type IosNotificationSettings } from './iosNotificationSettings';
import { serializeAppleDeviceFeaturesConfigurationBase } from './serializeAppleDeviceFeaturesConfigurationBase';
import { serializeIosHomeScreenItem } from './serializeIosHomeScreenItem';
import { serializeIosHomeScreenPage } from './serializeIosHomeScreenPage';
import { serializeIosNotificationSettings } from './serializeIosNotificationSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosDeviceFeaturesConfiguration(writer: SerializationWriter, iosDeviceFeaturesConfiguration: IosDeviceFeaturesConfiguration | undefined = {} as IosDeviceFeaturesConfiguration) : void {
        serializeAppleDeviceFeaturesConfigurationBase(writer, iosDeviceFeaturesConfiguration)
        writer.writeStringValue("assetTagTemplate", iosDeviceFeaturesConfiguration.assetTagTemplate);
        writer.writeCollectionOfObjectValues<IosHomeScreenItem>("homeScreenDockIcons", iosDeviceFeaturesConfiguration.homeScreenDockIcons, serializeIosHomeScreenItem);
        writer.writeCollectionOfObjectValues<IosHomeScreenPage>("homeScreenPages", iosDeviceFeaturesConfiguration.homeScreenPages, serializeIosHomeScreenPage);
        writer.writeStringValue("lockScreenFootnote", iosDeviceFeaturesConfiguration.lockScreenFootnote);
        writer.writeCollectionOfObjectValues<IosNotificationSettings>("notificationSettings", iosDeviceFeaturesConfiguration.notificationSettings, serializeIosNotificationSettings);
}
