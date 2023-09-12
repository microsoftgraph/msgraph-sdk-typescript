import { IosNotificationAlertType } from './iosNotificationAlertType';
import { type IosNotificationSettings } from './iosNotificationSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNotificationSettings(iosNotificationSettings: IosNotificationSettings | undefined = {} as IosNotificationSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "alertType": n => { iosNotificationSettings.alertType = n.getEnumValue<IosNotificationAlertType>(IosNotificationAlertType); },
        "appName": n => { iosNotificationSettings.appName = n.getStringValue(); },
        "badgesEnabled": n => { iosNotificationSettings.badgesEnabled = n.getBooleanValue(); },
        "bundleID": n => { iosNotificationSettings.bundleID = n.getStringValue(); },
        "enabled": n => { iosNotificationSettings.enabled = n.getBooleanValue(); },
        "@odata.type": n => { iosNotificationSettings.odataType = n.getStringValue(); },
        "publisher": n => { iosNotificationSettings.publisher = n.getStringValue(); },
        "showInNotificationCenter": n => { iosNotificationSettings.showInNotificationCenter = n.getBooleanValue(); },
        "showOnLockScreen": n => { iosNotificationSettings.showOnLockScreen = n.getBooleanValue(); },
        "soundsEnabled": n => { iosNotificationSettings.soundsEnabled = n.getBooleanValue(); },
    }
}
