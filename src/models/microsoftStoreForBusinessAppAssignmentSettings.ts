import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * Whether or not to use device execution context for Microsoft Store for Business mobile app.
     */
    useDeviceContext?: boolean | undefined;
}
