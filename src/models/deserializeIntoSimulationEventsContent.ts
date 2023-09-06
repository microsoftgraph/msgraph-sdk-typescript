import { createSimulationEventFromDiscriminatorValue } from './createSimulationEventFromDiscriminatorValue';
import { serializeSimulationEvent } from './serializeSimulationEvent';
import { type SimulationEvent } from './simulationEvent';
import { type SimulationEventsContent } from './simulationEventsContent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationEventsContent(simulationEventsContent: SimulationEventsContent | undefined = {} as SimulationEventsContent) : Record<string, (node: ParseNode) => void> {
    return {
        "compromisedRate": n => { simulationEventsContent.compromisedRate = n.getNumberValue(); },
        "events": n => { simulationEventsContent.events = n.getCollectionOfObjectValues<SimulationEvent>(createSimulationEventFromDiscriminatorValue); },
        "@odata.type": n => { simulationEventsContent.odataType = n.getStringValue(); },
    }
}
