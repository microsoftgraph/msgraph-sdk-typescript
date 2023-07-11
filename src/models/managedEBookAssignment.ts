import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {InstallIntent} from './installIntent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignment extends Entity, Parsable {
    /**
     * Possible values for the install intent chosen by the admin.
     */
    installIntent?: InstallIntent | undefined;
    /**
     * The assignment target for eBook.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}
