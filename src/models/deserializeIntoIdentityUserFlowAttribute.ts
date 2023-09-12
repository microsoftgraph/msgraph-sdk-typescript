import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IdentityUserFlowAttribute } from './identityUserFlowAttribute';
import { IdentityUserFlowAttributeDataType } from './identityUserFlowAttributeDataType';
import { IdentityUserFlowAttributeType } from './identityUserFlowAttributeType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttribute(identityUserFlowAttribute: IdentityUserFlowAttribute | undefined = {} as IdentityUserFlowAttribute) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityUserFlowAttribute),
        "dataType": n => { identityUserFlowAttribute.dataType = n.getEnumValue<IdentityUserFlowAttributeDataType>(IdentityUserFlowAttributeDataType); },
        "description": n => { identityUserFlowAttribute.description = n.getStringValue(); },
        "displayName": n => { identityUserFlowAttribute.displayName = n.getStringValue(); },
        "userFlowAttributeType": n => { identityUserFlowAttribute.userFlowAttributeType = n.getEnumValue<IdentityUserFlowAttributeType>(IdentityUserFlowAttributeType); },
    }
}
