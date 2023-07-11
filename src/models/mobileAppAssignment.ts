import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {InstallIntent} from './installIntent';
import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppAssignment extends Entity, Parsable {
    /**
     * Possible values for the install intent chosen by the admin.
     */
    intent?: InstallIntent | undefined;
    /**
     * The settings for target assignment defined by the admin.
     */
    settings?: MobileAppAssignmentSettings | undefined;
    /**
     * The target group assignment defined by the admin.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}
