import {AttackSimulationSimulationUserCoverage} from '../../../models/attackSimulationSimulationUserCoverage';
import {serializeAttackSimulationSimulationUserCoverage} from '../../../models/serializeAttackSimulationSimulationUserCoverage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationSimulationUserCoverageResponse} from './getAttackSimulationSimulationUserCoverageResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationSimulationUserCoverageResponse(getAttackSimulationSimulationUserCoverageResponse: GetAttackSimulationSimulationUserCoverageResponse | undefined = {} as GetAttackSimulationSimulationUserCoverageResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationSimulationUserCoverageResponse)
        writer.writeCollectionOfObjectValues<AttackSimulationSimulationUserCoverage>("value", getAttackSimulationSimulationUserCoverageResponse.value, serializeAttackSimulationSimulationUserCoverage);
}
