import {serializeIdentity} from './serializeIdentity';
import {SharePointIdentity} from './sharePointIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentity(writer: SerializationWriter, sharePointIdentity: SharePointIdentity | undefined = {} as SharePointIdentity) : void {
        serializeIdentity(writer, sharePointIdentity)
        writer.writeStringValue("loginName", sharePointIdentity.loginName);
}
