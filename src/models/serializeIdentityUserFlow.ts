import { type IdentityUserFlow } from './identityUserFlow';
import { serializeEntity } from './serializeEntity';
import { UserFlowType } from './userFlowType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlow(writer: SerializationWriter, identityUserFlow: IdentityUserFlow | undefined = {} as IdentityUserFlow) : void {
        serializeEntity(writer, identityUserFlow)
        writer.writeEnumValue<UserFlowType>("userFlowType", identityUserFlow.userFlowType);
        writer.writeNumberValue("userFlowTypeVersion", identityUserFlow.userFlowTypeVersion);
}
