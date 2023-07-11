import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {SharePointIdentity} from './sharePointIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

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
