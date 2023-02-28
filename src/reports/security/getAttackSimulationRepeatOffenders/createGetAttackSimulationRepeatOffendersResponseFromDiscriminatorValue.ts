import {GetAttackSimulationRepeatOffendersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationRepeatOffendersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAttackSimulationRepeatOffendersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAttackSimulationRepeatOffendersResponse();
}
