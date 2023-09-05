import { type ConditionalAccessConditionSet } from './conditionalAccessConditionSet';
import { type ConditionalAccessGrantControls } from './conditionalAccessGrantControls';
import { ConditionalAccessPolicyState } from './conditionalAccessPolicyState';
import { type ConditionalAccessSessionControls } from './conditionalAccessSessionControls';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicy extends Entity, Parsable {
    /**
     * The conditions property
     */
    conditions?: ConditionalAccessConditionSet | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     */
    createdDateTime?: Date | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * Specifies a display name for the conditionalAccessPolicy object.
     */
    displayName?: string | undefined;
    /**
     * Specifies the grant controls that must be fulfilled to pass the policy.
     */
    grantControls?: ConditionalAccessGrantControls | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * Specifies the session controls that are enforced after sign-in.
     */
    sessionControls?: ConditionalAccessSessionControls | undefined;
    /**
     * The state property
     */
    state?: ConditionalAccessPolicyState | undefined;
    /**
     * The templateId property
     */
    templateId?: string | undefined;
}
