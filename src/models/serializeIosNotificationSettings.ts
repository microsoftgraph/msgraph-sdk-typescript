import {IosNotificationAlertType} from './iosNotificationAlertType';
import {IosNotificationSettings} from './iosNotificationSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosNotificationSettings(writer: SerializationWriter, iosNotificationSettings: IosNotificationSettings | undefined = {} as IosNotificationSettings) : void {
        writer.writeEnumValue<IosNotificationAlertType>("alertType", iosNotificationSettings.alertType);
        writer.writeStringValue("appName", iosNotificationSettings.appName);
        writer.writeBooleanValue("badgesEnabled", iosNotificationSettings.badgesEnabled);
        writer.writeStringValue("bundleID", iosNotificationSettings.bundleID);
        writer.writeBooleanValue("enabled", iosNotificationSettings.enabled);
        writer.writeStringValue("@odata.type", iosNotificationSettings.odataType);
        writer.writeStringValue("publisher", iosNotificationSettings.publisher);
        writer.writeBooleanValue("showInNotificationCenter", iosNotificationSettings.showInNotificationCenter);
        writer.writeBooleanValue("showOnLockScreen", iosNotificationSettings.showOnLockScreen);
        writer.writeBooleanValue("soundsEnabled", iosNotificationSettings.soundsEnabled);
        writer.writeAdditionalData(iosNotificationSettings.additionalData);
}
