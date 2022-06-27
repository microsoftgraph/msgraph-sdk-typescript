import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {InstallIntent} from './installIntent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignment extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook. */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}
