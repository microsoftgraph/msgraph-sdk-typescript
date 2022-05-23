import {ConditionalAccessFilter} from './conditionalAccessFilter';

export interface ConditionalAccessDevices{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Filter that defines the dynamic-device-syntax rule to include/exclude devices. A filter can use device properties (such as extension attributes) to include/exclude them. Cannot be set if includeDevices or excludeDevices is set. */
    deviceFilter?:ConditionalAccessFilter | undefined;
}
