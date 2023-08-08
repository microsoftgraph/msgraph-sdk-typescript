import type {SimulationEvent} from './simulationEvent';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationEvent(simulationEvent: SimulationEvent | undefined = {} as SimulationEvent) : Record<string, (node: ParseNode) => void> {
    return {
        "count": n => { simulationEvent.count = n.getNumberValue(); },
        "eventName": n => { simulationEvent.eventName = n.getStringValue(); },
        "@odata.type": n => { simulationEvent.odataType = n.getStringValue(); },
    }
}
