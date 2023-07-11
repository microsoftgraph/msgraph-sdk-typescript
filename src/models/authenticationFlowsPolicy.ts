import {Entity} from './entity';
import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationFlowsPolicy extends Entity, Parsable {
    /**
     * Inherited property. A description of the policy. Optional. Read-only.
     */
    description?: string | undefined;
    /**
     * Inherited property. The human-readable name of the policy. Optional. Read-only.
     */
    displayName?: string | undefined;
    /**
     * Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. Optional. Read-only.
     */
    selfServiceSignUp?: SelfServiceSignUpAuthenticationFlowConfiguration | undefined;
}
