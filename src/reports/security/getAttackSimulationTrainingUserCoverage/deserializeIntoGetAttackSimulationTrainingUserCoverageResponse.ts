import { type AttackSimulationTrainingUserCoverage } from '../../../models/attackSimulationTrainingUserCoverage';
import { createAttackSimulationTrainingUserCoverageFromDiscriminatorValue } from '../../../models/createAttackSimulationTrainingUserCoverageFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAttackSimulationTrainingUserCoverage } from '../../../models/serializeAttackSimulationTrainingUserCoverage';
import { type GetAttackSimulationTrainingUserCoverageResponse } from './getAttackSimulationTrainingUserCoverageResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAttackSimulationTrainingUserCoverageResponse(getAttackSimulationTrainingUserCoverageResponse: GetAttackSimulationTrainingUserCoverageResponse | undefined = {} as GetAttackSimulationTrainingUserCoverageResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAttackSimulationTrainingUserCoverageResponse),
        "value": n => { getAttackSimulationTrainingUserCoverageResponse.value = n.getCollectionOfObjectValues<AttackSimulationTrainingUserCoverage>(createAttackSimulationTrainingUserCoverageFromDiscriminatorValue); },
    }
}
