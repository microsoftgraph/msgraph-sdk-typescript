import type {AttackSimulationSimulationUserCoverage} from '../../../models/attackSimulationSimulationUserCoverage';
import {createAttackSimulationSimulationUserCoverageFromDiscriminatorValue} from '../../../models/createAttackSimulationSimulationUserCoverageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAttackSimulationSimulationUserCoverage} from '../../../models/serializeAttackSimulationSimulationUserCoverage';
import type {GetAttackSimulationSimulationUserCoverageResponse} from './getAttackSimulationSimulationUserCoverageResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAttackSimulationSimulationUserCoverageResponse(getAttackSimulationSimulationUserCoverageResponse: GetAttackSimulationSimulationUserCoverageResponse | undefined = {} as GetAttackSimulationSimulationUserCoverageResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAttackSimulationSimulationUserCoverageResponse),
        "value": n => { getAttackSimulationSimulationUserCoverageResponse.value = n.getCollectionOfObjectValues<AttackSimulationSimulationUserCoverage>(createAttackSimulationSimulationUserCoverageFromDiscriminatorValue); },
    }
}
