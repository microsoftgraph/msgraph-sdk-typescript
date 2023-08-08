import type {Identity} from './identity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailIdentity extends Identity, Parsable {
    /**
     * Email address of the user.
     */
    email?: string | undefined;
}
