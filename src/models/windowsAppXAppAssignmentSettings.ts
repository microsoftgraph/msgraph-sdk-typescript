import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsAppXAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * When TRUE, indicates that device execution context will be used for the AppX mobile app. When FALSE, indicates that user context will be used for the AppX mobile app. By default, this property is set to FALSE. Once this property has been set to TRUE it cannot be changed.
     */
    useDeviceContext?: boolean | undefined;
}
