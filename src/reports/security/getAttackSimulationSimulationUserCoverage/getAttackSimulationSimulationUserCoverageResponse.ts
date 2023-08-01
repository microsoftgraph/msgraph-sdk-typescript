import type {AttackSimulationSimulationUserCoverage} from '../../../models/attackSimulationSimulationUserCoverage';
import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationSimulationUserCoverageResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AttackSimulationSimulationUserCoverage[] | undefined;
}
