import { deserializeIntoIdentityUserFlowAttribute } from './deserializeIntoIdentityUserFlowAttribute';
import { type IdentityCustomUserFlowAttribute } from './identityCustomUserFlowAttribute';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityCustomUserFlowAttribute(identityCustomUserFlowAttribute: IdentityCustomUserFlowAttribute | undefined = {} as IdentityCustomUserFlowAttribute) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlowAttribute(identityCustomUserFlowAttribute),
    }
}
