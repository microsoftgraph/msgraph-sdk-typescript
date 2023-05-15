import {createSimulationAutomationRunFromDiscriminatorValue} from './createSimulationAutomationRunFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSimulationAutomationRun} from './serializeSimulationAutomationRun';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationRunCollectionResponse} from './simulationAutomationRunCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationRunCollectionResponse(simulationAutomationRunCollectionResponse: SimulationAutomationRunCollectionResponse | undefined = {} as SimulationAutomationRunCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationAutomationRunCollectionResponse),
        "value": n => { simulationAutomationRunCollectionResponse.value = n.getCollectionOfObjectValues<SimulationAutomationRun>(createSimulationAutomationRunFromDiscriminatorValue); },
    }
}
