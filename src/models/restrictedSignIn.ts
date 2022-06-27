import {SignIn} from './signIn';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RestrictedSignIn extends Partial<AdditionalDataHolder>, Partial<Parsable>, SignIn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The targetTenantId property */
    targetTenantId?: string | undefined;
}
