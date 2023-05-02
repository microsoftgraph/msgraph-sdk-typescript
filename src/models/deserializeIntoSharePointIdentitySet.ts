import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createSharePointIdentityFromDiscriminatorValue} from './createSharePointIdentityFromDiscriminatorValue';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {serializeSharePointIdentity} from './serializeSharePointIdentity';
import {SharePointIdentity} from './sharePointIdentity';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePointIdentitySet(sharePointIdentitySet: SharePointIdentitySet | undefined = {} as SharePointIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(sharePointIdentitySet),
        "group": n => { sharePointIdentitySet.group = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "siteGroup": n => { sharePointIdentitySet.siteGroup = n.getObjectValue<SharePointIdentity>(createSharePointIdentityFromDiscriminatorValue); },
        "siteUser": n => { sharePointIdentitySet.siteUser = n.getObjectValue<SharePointIdentity>(createSharePointIdentityFromDiscriminatorValue); },
    }
}
