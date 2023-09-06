import { deserializeIntoIdentityCustomUserFlowAttribute } from './deserializeIntoIdentityCustomUserFlowAttribute';
import { type IdentityCustomUserFlowAttribute } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityCustomUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityCustomUserFlowAttribute;
}
