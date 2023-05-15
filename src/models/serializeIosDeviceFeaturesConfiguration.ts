import {IosDeviceFeaturesConfiguration} from './iosDeviceFeaturesConfiguration';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {IosNotificationSettings} from './iosNotificationSettings';
import {serializeAppleDeviceFeaturesConfigurationBase} from './serializeAppleDeviceFeaturesConfigurationBase';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {serializeIosHomeScreenPage} from './serializeIosHomeScreenPage';
import {serializeIosNotificationSettings} from './serializeIosNotificationSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosDeviceFeaturesConfiguration(writer: SerializationWriter, iosDeviceFeaturesConfiguration: IosDeviceFeaturesConfiguration | undefined = {} as IosDeviceFeaturesConfiguration) : void {
        serializeAppleDeviceFeaturesConfigurationBase(writer, iosDeviceFeaturesConfiguration)
        writer.writeStringValue("assetTagTemplate", iosDeviceFeaturesConfiguration.assetTagTemplate);
        writer.writeCollectionOfObjectValues<IosHomeScreenItem>("homeScreenDockIcons", iosDeviceFeaturesConfiguration.homeScreenDockIcons, serializeIosHomeScreenItem);
        writer.writeCollectionOfObjectValues<IosHomeScreenPage>("homeScreenPages", iosDeviceFeaturesConfiguration.homeScreenPages, serializeIosHomeScreenPage);
        writer.writeStringValue("lockScreenFootnote", iosDeviceFeaturesConfiguration.lockScreenFootnote);
        writer.writeCollectionOfObjectValues<IosNotificationSettings>("notificationSettings", iosDeviceFeaturesConfiguration.notificationSettings, serializeIosNotificationSettings);
}
