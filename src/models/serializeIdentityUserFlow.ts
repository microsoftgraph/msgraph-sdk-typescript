import {IdentityUserFlow} from './identityUserFlow';
import {serializeEntity} from './serializeEntity';
import {UserFlowType} from './userFlowType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlow(identityUserFlow: IdentityUserFlow | undefined = {} as IdentityUserFlow, writer: SerializationWriter) : void {
        serializeEntity(writer, identityUserFlow)
        writer.writeEnumValue<UserFlowType>("userFlowType", identityUserFlow.userFlowType);
        writer.writeNumberValue("userFlowTypeVersion", identityUserFlow.userFlowTypeVersion);
}
