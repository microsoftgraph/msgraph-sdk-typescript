import {IosNotificationAlertType} from './iosNotificationAlertType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosNotificationSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Notification Settings Alert Type.
     */
    alertType?: IosNotificationAlertType | undefined;
    /**
     * Application name to be associated with the bundleID.
     */
    appName?: string | undefined;
    /**
     * Indicates whether badges are allowed for this app.
     */
    badgesEnabled?: boolean | undefined;
    /**
     * Bundle id of app to which to apply these notification settings.
     */
    bundleID?: string | undefined;
    /**
     * Indicates whether notifications are allowed for this app.
     */
    enabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Publisher to be associated with the bundleID.
     */
    publisher?: string | undefined;
    /**
     * Indicates whether notifications can be shown in notification center.
     */
    showInNotificationCenter?: boolean | undefined;
    /**
     * Indicates whether notifications can be shown on the lock screen.
     */
    showOnLockScreen?: boolean | undefined;
    /**
     * Indicates whether sounds are allowed for this app.
     */
    soundsEnabled?: boolean | undefined;
}
