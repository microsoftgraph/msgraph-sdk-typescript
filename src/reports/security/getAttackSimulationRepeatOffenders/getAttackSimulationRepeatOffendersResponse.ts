import type {AttackSimulationRepeatOffender} from '../../../models/attackSimulationRepeatOffender';
import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationRepeatOffendersResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AttackSimulationRepeatOffender[] | undefined;
}
