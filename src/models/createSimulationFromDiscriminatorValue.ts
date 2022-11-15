import {Simulation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Simulation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Simulation();
}
