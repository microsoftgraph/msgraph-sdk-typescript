import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityUserFlow} from './identityUserFlow';
import {UserFlowType} from './userFlowType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlow(identityUserFlow: IdentityUserFlow | undefined = {} as IdentityUserFlow) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityUserFlow),
        "userFlowType": n => { identityUserFlow.userFlowType = n.getEnumValue<UserFlowType>(UserFlowType); },
        "userFlowTypeVersion": n => { identityUserFlow.userFlowTypeVersion = n.getNumberValue(); },
    }
}
