import {deserializeIntoIdentityCustomUserFlowAttribute} from './deserializeIntoIdentityCustomUserFlowAttribute';
import {IdentityCustomUserFlowAttribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityCustomUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityCustomUserFlowAttribute;
}
