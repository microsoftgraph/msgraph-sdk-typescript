import {createSimulationFromDiscriminatorValue} from './createSimulationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSimulation} from './serializeSimulation';
import type {Simulation} from './simulation';
import type {SimulationCollectionResponse} from './simulationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationCollectionResponse(simulationCollectionResponse: SimulationCollectionResponse | undefined = {} as SimulationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationCollectionResponse),
        "value": n => { simulationCollectionResponse.value = n.getCollectionOfObjectValues<Simulation>(createSimulationFromDiscriminatorValue); },
    }
}
