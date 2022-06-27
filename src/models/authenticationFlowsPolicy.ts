import {Entity} from './entity';
import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationFlowsPolicy extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Inherited property. A description of the policy. This property is not a key. Optional. Read-only. */
    description?: string | undefined;
    /** Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only. */
    displayName?: string | undefined;
    /** Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only. */
    selfServiceSignUp?: SelfServiceSignUpAuthenticationFlowConfiguration | undefined;
}
