import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PolicyBase} from './policyBase';

export interface PermissionGrantPolicy extends PolicyBase{
    /** Condition sets which are excluded in this permission grant policy. Automatically expanded on GET. */
    excludes?:PermissionGrantConditionSet[] | undefined;
    /** Condition sets which are included in this permission grant policy. Automatically expanded on GET. */
    includes?:PermissionGrantConditionSet[] | undefined;
}
