import { deserializeIntoGetAttackSimulationRepeatOffendersResponse } from './deserializeIntoGetAttackSimulationRepeatOffendersResponse';
import { type GetAttackSimulationRepeatOffendersResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationRepeatOffendersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAttackSimulationRepeatOffendersResponse;
}
