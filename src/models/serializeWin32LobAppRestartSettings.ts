import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppRestartSettings(writer: SerializationWriter, win32LobAppRestartSettings: Win32LobAppRestartSettings | undefined = {} as Win32LobAppRestartSettings) : void {
        writer.writeNumberValue("countdownDisplayBeforeRestartInMinutes", win32LobAppRestartSettings.countdownDisplayBeforeRestartInMinutes);
        writer.writeNumberValue("gracePeriodInMinutes", win32LobAppRestartSettings.gracePeriodInMinutes);
        writer.writeStringValue("@odata.type", win32LobAppRestartSettings.odataType);
        writer.writeNumberValue("restartNotificationSnoozeDurationInMinutes", win32LobAppRestartSettings.restartNotificationSnoozeDurationInMinutes);
        writer.writeAdditionalData(win32LobAppRestartSettings.additionalData);
}
