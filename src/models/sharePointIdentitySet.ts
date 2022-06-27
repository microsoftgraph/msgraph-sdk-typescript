import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {SharePointIdentity} from './sharePointIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentitySet extends Partial<AdditionalDataHolder>, IdentitySet, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The group associated with this action. Optional. */
    group?: Identity | undefined;
    /** The SharePoint group associated with this action. Optional. */
    siteGroup?: SharePointIdentity | undefined;
    /** The SharePoint user associated with this action. Optional. */
    siteUser?: SharePointIdentity | undefined;
}
