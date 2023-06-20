import {AccessType} from './accessType';
import {Acl} from './acl';
import {AclType} from './aclType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcl(acl: Acl | undefined = {} as Acl, writer: SerializationWriter) : void {
        writer.writeEnumValue<AccessType>("accessType", acl.accessType);
        writer.writeStringValue("@odata.type", acl.odataType);
        writer.writeEnumValue<AclType>("type", acl.type);
        writer.writeStringValue("value", acl.value);
        writer.writeAdditionalData(acl.additionalData);
}
