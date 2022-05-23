import {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';

export interface ScheduleActionsForRulesPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The deviceComplianceScheduledActionForRules property */
    deviceComplianceScheduledActionForRules?:DeviceComplianceScheduledActionForRule[] | undefined;
}
