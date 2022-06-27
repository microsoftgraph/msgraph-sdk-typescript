import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentLimitConfiguration extends Partial<AdditionalDataHolder>, DeviceEnrollmentConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The maximum number of devices that a user can enroll */
    limit?: number | undefined;
}
