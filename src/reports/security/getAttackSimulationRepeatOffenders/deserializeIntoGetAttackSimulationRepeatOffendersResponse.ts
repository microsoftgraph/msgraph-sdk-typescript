import {AttackSimulationRepeatOffender} from '../../../models/attackSimulationRepeatOffender';
import {createAttackSimulationRepeatOffenderFromDiscriminatorValue} from '../../../models/createAttackSimulationRepeatOffenderFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAttackSimulationRepeatOffender} from '../../../models/serializeAttackSimulationRepeatOffender';
import {GetAttackSimulationRepeatOffendersResponse} from './getAttackSimulationRepeatOffendersResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAttackSimulationRepeatOffendersResponse(getAttackSimulationRepeatOffendersResponse: GetAttackSimulationRepeatOffendersResponse | undefined = {} as GetAttackSimulationRepeatOffendersResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAttackSimulationRepeatOffendersResponse),
        "value": n => { getAttackSimulationRepeatOffendersResponse.value = n.getCollectionOfObjectValues<AttackSimulationRepeatOffender>(createAttackSimulationRepeatOffenderFromDiscriminatorValue); },
    }
}
