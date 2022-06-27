import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppAssignmentSettings extends Partial<AdditionalDataHolder>, MobileAppAssignmentSettings, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The delivery optimization priority for this app assignment. This setting is not supported in National Cloud environments. Possible values are: notConfigured, foreground. */
    deliveryOptimizationPriority?: Win32LobAppDeliveryOptimizationPriority | undefined;
    /** The install time settings to apply for this app assignment. */
    installTimeSettings?: MobileAppInstallTimeSettings | undefined;
    /** The notification status for this app assignment. Possible values are: showAll, showReboot, hideAll. */
    notifications?: Win32LobAppNotification | undefined;
    /** The reboot settings to apply for this app assignment. */
    restartSettings?: Win32LobAppRestartSettings | undefined;
}
