import {ManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/managedDeviceMobileAppConfigurationAssignment';

export interface AssignPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The assignments property */
    assignments?:ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
}
