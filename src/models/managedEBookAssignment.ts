import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {InstallIntent} from './installIntent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignment extends Entity, Partial<Parsable> {
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook. */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}
