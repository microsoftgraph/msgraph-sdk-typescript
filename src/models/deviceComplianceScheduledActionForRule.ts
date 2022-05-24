import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {Entity} from './entity';

export interface DeviceComplianceScheduledActionForRule extends Entity{
    /** Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired. */
    ruleName?:string | undefined;
    /** The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action. */
    scheduledActionConfigurations?:DeviceComplianceActionItem[] | undefined;
}
