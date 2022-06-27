import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PolicyBase} from './policyBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable>, PolicyBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Condition sets which are excluded in this permission grant policy. Automatically expanded on GET. */
    excludes?: PermissionGrantConditionSet[] | undefined;
    /** Condition sets which are included in this permission grant policy. Automatically expanded on GET. */
    includes?: PermissionGrantConditionSet[] | undefined;
}
