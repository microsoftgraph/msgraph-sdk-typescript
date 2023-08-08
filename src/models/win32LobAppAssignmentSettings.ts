import type {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import type {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import type {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * Contains value for delivery optimization priority.
     */
    deliveryOptimizationPriority?: Win32LobAppDeliveryOptimizationPriority | undefined;
    /**
     * The install time settings to apply for this app assignment.
     */
    installTimeSettings?: MobileAppInstallTimeSettings | undefined;
    /**
     * Contains value for notification status.
     */
    notifications?: Win32LobAppNotification | undefined;
    /**
     * The reboot settings to apply for this app assignment.
     */
    restartSettings?: Win32LobAppRestartSettings | undefined;
}
