import {createSimulationEventFromDiscriminatorValue} from './createSimulationEventFromDiscriminatorValue';
import {serializeSimulationEvent} from './serializeSimulationEvent';
import {SimulationEvent} from './simulationEvent';
import {SimulationEventsContent} from './simulationEventsContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationEventsContent(simulationEventsContent: SimulationEventsContent | undefined = {} as SimulationEventsContent) : Record<string, (node: ParseNode) => void> {
    return {
        "compromisedRate": n => { simulationEventsContent.compromisedRate = n.getNumberValue(); },
        "events": n => { simulationEventsContent.events = n.getCollectionOfObjectValues<SimulationEvent>(createSimulationEventFromDiscriminatorValue); },
        "@odata.type": n => { simulationEventsContent.odataType = n.getStringValue(); },
    }
}
