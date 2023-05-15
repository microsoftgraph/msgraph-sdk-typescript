import {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppInstallTimeSettings(mobileAppInstallTimeSettings: MobileAppInstallTimeSettings | undefined = {} as MobileAppInstallTimeSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "deadlineDateTime": n => { mobileAppInstallTimeSettings.deadlineDateTime = n.getDateValue(); },
        "@odata.type": n => { mobileAppInstallTimeSettings.odataType = n.getStringValue(); },
        "startDateTime": n => { mobileAppInstallTimeSettings.startDateTime = n.getDateValue(); },
        "useLocalTime": n => { mobileAppInstallTimeSettings.useLocalTime = n.getBooleanValue(); },
    }
}
