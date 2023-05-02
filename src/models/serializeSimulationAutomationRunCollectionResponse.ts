import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulationAutomationRun} from './serializeSimulationAutomationRun';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationRunCollectionResponse} from './simulationAutomationRunCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomationRunCollectionResponse(writer: SerializationWriter, simulationAutomationRunCollectionResponse: SimulationAutomationRunCollectionResponse | undefined = {} as SimulationAutomationRunCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationAutomationRunCollectionResponse)
        writer.writeCollectionOfObjectValues<SimulationAutomationRun>("value", simulationAutomationRunCollectionResponse.value, serializeSimulationAutomationRun);
}
