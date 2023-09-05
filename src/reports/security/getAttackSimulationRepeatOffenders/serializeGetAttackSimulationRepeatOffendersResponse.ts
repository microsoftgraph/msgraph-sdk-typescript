import { type AttackSimulationRepeatOffender } from '../../../models/attackSimulationRepeatOffender';
import { serializeAttackSimulationRepeatOffender } from '../../../models/serializeAttackSimulationRepeatOffender';
import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetAttackSimulationRepeatOffendersResponse } from './getAttackSimulationRepeatOffendersResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationRepeatOffendersResponse(writer: SerializationWriter, getAttackSimulationRepeatOffendersResponse: GetAttackSimulationRepeatOffendersResponse | undefined = {} as GetAttackSimulationRepeatOffendersResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationRepeatOffendersResponse)
        writer.writeCollectionOfObjectValues<AttackSimulationRepeatOffender>("value", getAttackSimulationRepeatOffendersResponse.value, serializeAttackSimulationRepeatOffender);
}
