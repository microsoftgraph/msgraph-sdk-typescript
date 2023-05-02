import {AccessType} from './accessType';
import {Acl} from './acl';
import {AclType} from './aclType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcl(acl: Acl | undefined = {} as Acl) : Record<string, (node: ParseNode) => void> {
    return {
        "accessType": n => { acl.accessType = n.getEnumValue<AccessType>(AccessType); },
        "@odata.type": n => { acl.odataType = n.getStringValue(); },
        "type": n => { acl.type = n.getEnumValue<AclType>(AclType); },
        "value": n => { acl.value = n.getStringValue(); },
    }
}
