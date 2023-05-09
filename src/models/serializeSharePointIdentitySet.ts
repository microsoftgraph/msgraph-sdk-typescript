import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeSharePointIdentity} from './serializeSharePointIdentity';
import {SharePointIdentity} from './sharePointIdentity';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentitySet(writer: SerializationWriter, sharePointIdentitySet: SharePointIdentitySet | undefined = {} as SharePointIdentitySet) : void {
        serializeIdentitySet(writer, sharePointIdentitySet)
        writer.writeObjectValue<Identity>("group", sharePointIdentitySet.group, serializeIdentity);
        writer.writeObjectValue<SharePointIdentity>("siteGroup", sharePointIdentitySet.siteGroup, serializeSharePointIdentity);
        writer.writeObjectValue<SharePointIdentity>("siteUser", sharePointIdentitySet.siteUser, serializeSharePointIdentity);
}
