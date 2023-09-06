import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSimulationAutomationRun } from './serializeSimulationAutomationRun';
import { type SimulationAutomationRun } from './simulationAutomationRun';
import { type SimulationAutomationRunCollectionResponse } from './simulationAutomationRunCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomationRunCollectionResponse(writer: SerializationWriter, simulationAutomationRunCollectionResponse: SimulationAutomationRunCollectionResponse | undefined = {} as SimulationAutomationRunCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationAutomationRunCollectionResponse)
        writer.writeCollectionOfObjectValues<SimulationAutomationRun>("value", simulationAutomationRunCollectionResponse.value, serializeSimulationAutomationRun);
}
