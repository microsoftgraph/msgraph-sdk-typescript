import {AttackSimulationUser} from './attackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationUser(attackSimulationUser: AttackSimulationUser | undefined = {} as AttackSimulationUser, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", attackSimulationUser.displayName);
        writer.writeStringValue("email", attackSimulationUser.email);
        writer.writeStringValue("@odata.type", attackSimulationUser.odataType);
        writer.writeStringValue("userId", attackSimulationUser.userId);
        writer.writeAdditionalData(attackSimulationUser.additionalData);
}
