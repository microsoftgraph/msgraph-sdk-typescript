import { serializeIdentity } from './serializeIdentity';
import { type SharePointIdentity } from './sharePointIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentity(writer: SerializationWriter, sharePointIdentity: SharePointIdentity | undefined = {} as SharePointIdentity) : void {
        serializeIdentity(writer, sharePointIdentity)
        writer.writeStringValue("loginName", sharePointIdentity.loginName);
}
