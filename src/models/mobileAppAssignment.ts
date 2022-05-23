import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {InstallIntent} from './installIntent';
import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';

export interface MobileAppAssignment extends Entity{
    /** The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    intent?:InstallIntent | undefined;
    /** The settings for target assignment defined by the admin. */
    settings?:MobileAppAssignmentSettings | undefined;
    /** The target group assignment defined by the admin. */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}
