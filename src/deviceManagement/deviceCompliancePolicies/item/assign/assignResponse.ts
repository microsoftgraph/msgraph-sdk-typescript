import {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';

export interface AssignResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:DeviceCompliancePolicyAssignment[] | undefined;
}
