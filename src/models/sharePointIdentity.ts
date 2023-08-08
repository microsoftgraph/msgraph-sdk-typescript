import type {Identity} from './identity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentity extends Identity, Parsable {
    /**
     * The sign in name of the SharePoint identity.
     */
    loginName?: string | undefined;
}
