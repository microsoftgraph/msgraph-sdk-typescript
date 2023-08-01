import type {AttackSimulationTrainingUserCoverage} from '../../../models/attackSimulationTrainingUserCoverage';
import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationTrainingUserCoverageResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AttackSimulationTrainingUserCoverage[] | undefined;
}
