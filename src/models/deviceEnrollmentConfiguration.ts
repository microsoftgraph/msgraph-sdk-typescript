import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfiguration extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of group assignments for the device configuration profile */
    assignments?: EnrollmentConfigurationAssignment[] | undefined;
    /** Created date time in UTC of the device enrollment configuration */
    createdDateTime?: Date | undefined;
    /** The description of the device enrollment configuration */
    description?: string | undefined;
    /** The display name of the device enrollment configuration */
    displayName?: string | undefined;
    /** Last modified date time in UTC of the device enrollment configuration */
    lastModifiedDateTime?: Date | undefined;
    /** Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value. */
    priority?: number | undefined;
    /** The version of the device enrollment configuration */
    version?: number | undefined;
}
