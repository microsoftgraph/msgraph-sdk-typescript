import {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {serializeMobileAppInstallTimeSettings} from './serializeMobileAppInstallTimeSettings';
import {serializeWin32LobAppRestartSettings} from './serializeWin32LobAppRestartSettings';
import {Win32LobAppAssignmentSettings} from './win32LobAppAssignmentSettings';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppAssignmentSettings(writer: SerializationWriter, win32LobAppAssignmentSettings: Win32LobAppAssignmentSettings | undefined = {} as Win32LobAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, win32LobAppAssignmentSettings)
        writer.writeEnumValue<Win32LobAppDeliveryOptimizationPriority>("deliveryOptimizationPriority", win32LobAppAssignmentSettings.deliveryOptimizationPriority);
        writer.writeObjectValue<MobileAppInstallTimeSettings>("installTimeSettings", win32LobAppAssignmentSettings.installTimeSettings, serializeMobileAppInstallTimeSettings);
        writer.writeEnumValue<Win32LobAppNotification>("notifications", win32LobAppAssignmentSettings.notifications);
        writer.writeObjectValue<Win32LobAppRestartSettings>("restartSettings", win32LobAppAssignmentSettings.restartSettings, serializeWin32LobAppRestartSettings);
}
