import { AccessType } from './accessType';
import { type Acl } from './acl';
import { AclType } from './aclType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAcl(writer: SerializationWriter, acl: Acl | undefined = {} as Acl) : void {
        writer.writeEnumValue<AccessType>("accessType", acl.accessType);
        writer.writeStringValue("@odata.type", acl.odataType);
        writer.writeEnumValue<AclType>("type", acl.type);
        writer.writeStringValue("value", acl.value);
        writer.writeAdditionalData(acl.additionalData);
}
