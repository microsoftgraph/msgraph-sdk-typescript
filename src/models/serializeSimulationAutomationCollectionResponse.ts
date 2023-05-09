import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulationAutomation} from './serializeSimulationAutomation';
import {SimulationAutomation} from './simulationAutomation';
import {SimulationAutomationCollectionResponse} from './simulationAutomationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomationCollectionResponse(writer: SerializationWriter, simulationAutomationCollectionResponse: SimulationAutomationCollectionResponse | undefined = {} as SimulationAutomationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationAutomationCollectionResponse)
        writer.writeCollectionOfObjectValues<SimulationAutomation>("value", simulationAutomationCollectionResponse.value, serializeSimulationAutomation);
}
