import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {InstallIntent} from './installIntent';

export interface ManagedEBookAssignment extends Entity{
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    installIntent?:InstallIntent | undefined;
    /** The assignment target for eBook. */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}
