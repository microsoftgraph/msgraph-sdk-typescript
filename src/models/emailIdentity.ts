import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailIdentity extends Identity, Parsable {
    /**
     * Email address of the user.
     */
    email?: string | undefined;
}
