import {AttackSimulationSimulationUserCoverage} from '../../../models/attackSimulationSimulationUserCoverage';
import {serializeAttackSimulationSimulationUserCoverage} from '../../../models/serializeAttackSimulationSimulationUserCoverage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationSimulationUserCoverageResponse} from './getAttackSimulationSimulationUserCoverageResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationSimulationUserCoverageResponse(writer: SerializationWriter, getAttackSimulationSimulationUserCoverageResponse: GetAttackSimulationSimulationUserCoverageResponse | undefined = {} as GetAttackSimulationSimulationUserCoverageResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationSimulationUserCoverageResponse)
        writer.writeCollectionOfObjectValues<AttackSimulationSimulationUserCoverage>("value", getAttackSimulationSimulationUserCoverageResponse.value, serializeAttackSimulationSimulationUserCoverage);
}
