import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';

export interface DeviceComplianceScheduledActionForRuleCollectionResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The nextLink property */
    nextLink?:string | undefined;
    /** The value property */
    value?:DeviceComplianceScheduledActionForRule[] | undefined;
}
