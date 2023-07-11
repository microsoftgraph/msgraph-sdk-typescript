import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentity extends Identity, Parsable {
    /**
     * The sign in name of the SharePoint identity.
     */
    loginName?: string | undefined;
}
