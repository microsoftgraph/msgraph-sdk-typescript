import { type AttackSimulationSimulationUserCoverage } from '../../../models/attackSimulationSimulationUserCoverage';
import { serializeAttackSimulationSimulationUserCoverage } from '../../../models/serializeAttackSimulationSimulationUserCoverage';
import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetAttackSimulationSimulationUserCoverageResponse } from './getAttackSimulationSimulationUserCoverageResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationSimulationUserCoverageResponse(writer: SerializationWriter, getAttackSimulationSimulationUserCoverageResponse: GetAttackSimulationSimulationUserCoverageResponse | undefined = {} as GetAttackSimulationSimulationUserCoverageResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationSimulationUserCoverageResponse)
        writer.writeCollectionOfObjectValues<AttackSimulationSimulationUserCoverage>("value", getAttackSimulationSimulationUserCoverageResponse.value, serializeAttackSimulationSimulationUserCoverage);
}
