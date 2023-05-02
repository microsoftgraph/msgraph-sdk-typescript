import {AttackSimulationTrainingUserCoverage} from '../../../models/attackSimulationTrainingUserCoverage';
import {serializeAttackSimulationTrainingUserCoverage} from '../../../models/serializeAttackSimulationTrainingUserCoverage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationTrainingUserCoverageResponse} from './getAttackSimulationTrainingUserCoverageResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationTrainingUserCoverageResponse(writer: SerializationWriter, getAttackSimulationTrainingUserCoverageResponse: GetAttackSimulationTrainingUserCoverageResponse | undefined = {} as GetAttackSimulationTrainingUserCoverageResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationTrainingUserCoverageResponse)
        writer.writeCollectionOfObjectValues<AttackSimulationTrainingUserCoverage>("value", getAttackSimulationTrainingUserCoverageResponse.value, serializeAttackSimulationTrainingUserCoverage);
}
