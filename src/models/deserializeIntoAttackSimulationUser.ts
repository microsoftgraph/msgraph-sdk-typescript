import { type AttackSimulationUser } from './attackSimulationUser';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationUser(attackSimulationUser: AttackSimulationUser | undefined = {} as AttackSimulationUser) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { attackSimulationUser.displayName = n.getStringValue(); },
        "email": n => { attackSimulationUser.email = n.getStringValue(); },
        "@odata.type": n => { attackSimulationUser.odataType = n.getStringValue(); },
        "userId": n => { attackSimulationUser.userId = n.getStringValue(); },
    }
}
