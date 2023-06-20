import {AttackSimulationRepeatOffender} from '../../../models/attackSimulationRepeatOffender';
import {serializeAttackSimulationRepeatOffender} from '../../../models/serializeAttackSimulationRepeatOffender';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationRepeatOffendersResponse} from './getAttackSimulationRepeatOffendersResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationRepeatOffendersResponse(getAttackSimulationRepeatOffendersResponse: GetAttackSimulationRepeatOffendersResponse | undefined = {} as GetAttackSimulationRepeatOffendersResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationRepeatOffendersResponse)
        writer.writeCollectionOfObjectValues<AttackSimulationRepeatOffender>("value", getAttackSimulationRepeatOffendersResponse.value, serializeAttackSimulationRepeatOffender);
}
