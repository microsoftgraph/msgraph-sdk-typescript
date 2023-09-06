import { type Identity } from './identity';
import { serializeIdentity } from './serializeIdentity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeSharePointIdentity } from './serializeSharePointIdentity';
import { type SharePointIdentity } from './sharePointIdentity';
import { type SharePointIdentitySet } from './sharePointIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentitySet(writer: SerializationWriter, sharePointIdentitySet: SharePointIdentitySet | undefined = {} as SharePointIdentitySet) : void {
        serializeIdentitySet(writer, sharePointIdentitySet)
        writer.writeObjectValue<Identity>("group", sharePointIdentitySet.group, serializeIdentity);
        writer.writeObjectValue<SharePointIdentity>("siteGroup", sharePointIdentitySet.siteGroup, serializeSharePointIdentity);
        writer.writeObjectValue<SharePointIdentity>("siteUser", sharePointIdentitySet.siteUser, serializeSharePointIdentity);
}
