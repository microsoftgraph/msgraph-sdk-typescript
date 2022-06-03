import {SignIn} from './signIn';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RestrictedSignIn extends Partial<Parsable>, SignIn {
    /** The targetTenantId property */
    targetTenantId?: string | undefined;
}
