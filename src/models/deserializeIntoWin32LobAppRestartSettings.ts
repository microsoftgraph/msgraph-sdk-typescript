import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppRestartSettings(win32LobAppRestartSettings: Win32LobAppRestartSettings | undefined = {} as Win32LobAppRestartSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "countdownDisplayBeforeRestartInMinutes": n => { win32LobAppRestartSettings.countdownDisplayBeforeRestartInMinutes = n.getNumberValue(); },
        "gracePeriodInMinutes": n => { win32LobAppRestartSettings.gracePeriodInMinutes = n.getNumberValue(); },
        "@odata.type": n => { win32LobAppRestartSettings.odataType = n.getStringValue(); },
        "restartNotificationSnoozeDurationInMinutes": n => { win32LobAppRestartSettings.restartNotificationSnoozeDurationInMinutes = n.getNumberValue(); },
    }
}
