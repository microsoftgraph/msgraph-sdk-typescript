import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {Entity} from './entity';

export interface ConditionalAccessPolicy extends Entity{
    /** The conditions property */
    conditions?:ConditionalAccessConditionSet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    createdDateTime?:Date | undefined;
    /** Not used. */
    description?:string | undefined;
    /** Specifies a display name for the conditionalAccessPolicy object. */
    displayName?:string | undefined;
    /** Specifies the grant controls that must be fulfilled to pass the policy. */
    grantControls?:ConditionalAccessGrantControls | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    modifiedDateTime?:Date | undefined;
    /** Specifies the session controls that are enforced after sign-in. */
    sessionControls?:ConditionalAccessSessionControls | undefined;
    /** Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required. */
    state?:ConditionalAccessPolicyState | undefined;
}
