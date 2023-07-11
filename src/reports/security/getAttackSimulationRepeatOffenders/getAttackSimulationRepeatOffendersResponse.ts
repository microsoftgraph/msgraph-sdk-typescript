import {AttackSimulationRepeatOffender} from '../../../models/attackSimulationRepeatOffender';
import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationRepeatOffendersResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AttackSimulationRepeatOffender[] | undefined;
}
