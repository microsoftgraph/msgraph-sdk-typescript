import {AuthenticationMethodState} from './authenticationMethodState';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfiguration extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The state of the policy. Possible values are: enabled, disabled. */
    state?: AuthenticationMethodState | undefined;
}
