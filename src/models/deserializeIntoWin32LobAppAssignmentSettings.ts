import {createMobileAppInstallTimeSettingsFromDiscriminatorValue} from './createMobileAppInstallTimeSettingsFromDiscriminatorValue';
import {createWin32LobAppRestartSettingsFromDiscriminatorValue} from './createWin32LobAppRestartSettingsFromDiscriminatorValue';
import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {serializeMobileAppInstallTimeSettings} from './serializeMobileAppInstallTimeSettings';
import {serializeWin32LobAppRestartSettings} from './serializeWin32LobAppRestartSettings';
import {Win32LobAppAssignmentSettings} from './win32LobAppAssignmentSettings';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppAssignmentSettings(win32LobAppAssignmentSettings: Win32LobAppAssignmentSettings | undefined = {} as Win32LobAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(win32LobAppAssignmentSettings),
        "deliveryOptimizationPriority": n => { win32LobAppAssignmentSettings.deliveryOptimizationPriority = n.getEnumValue<Win32LobAppDeliveryOptimizationPriority>(Win32LobAppDeliveryOptimizationPriority); },
        "installTimeSettings": n => { win32LobAppAssignmentSettings.installTimeSettings = n.getObjectValue<MobileAppInstallTimeSettings>(createMobileAppInstallTimeSettingsFromDiscriminatorValue); },
        "notifications": n => { win32LobAppAssignmentSettings.notifications = n.getEnumValue<Win32LobAppNotification>(Win32LobAppNotification); },
        "restartSettings": n => { win32LobAppAssignmentSettings.restartSettings = n.getObjectValue<Win32LobAppRestartSettings>(createWin32LobAppRestartSettingsFromDiscriminatorValue); },
    }
}
