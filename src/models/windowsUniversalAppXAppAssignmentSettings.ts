import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppXAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * If true, uses device execution context for Windows Universal AppX mobile app. Device-context install is not allowed when this type of app is targeted with Available intent. Defaults to false.
     */
    useDeviceContext?: boolean | undefined;
}
