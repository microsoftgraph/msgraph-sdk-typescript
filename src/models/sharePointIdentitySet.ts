import type {Identity} from './identity';
import type {IdentitySet} from './identitySet';
import type {SharePointIdentity} from './sharePointIdentity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentitySet extends IdentitySet, Parsable {
    /**
     * The group associated with this action. Optional.
     */
    group?: Identity | undefined;
    /**
     * The SharePoint group associated with this action. Optional.
     */
    siteGroup?: SharePointIdentity | undefined;
    /**
     * The SharePoint user associated with this action. Optional.
     */
    siteUser?: SharePointIdentity | undefined;
}
