import { createSimulationAutomationFromDiscriminatorValue } from './createSimulationAutomationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSimulationAutomation } from './serializeSimulationAutomation';
import { type SimulationAutomation } from './simulationAutomation';
import { type SimulationAutomationCollectionResponse } from './simulationAutomationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationCollectionResponse(simulationAutomationCollectionResponse: SimulationAutomationCollectionResponse | undefined = {} as SimulationAutomationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationAutomationCollectionResponse),
        "value": n => { simulationAutomationCollectionResponse.value = n.getCollectionOfObjectValues<SimulationAutomation>(createSimulationAutomationFromDiscriminatorValue); },
    }
}
