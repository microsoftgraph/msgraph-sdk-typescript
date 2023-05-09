import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSimulation} from './serializeSimulation';
import {Simulation} from './simulation';
import {SimulationCollectionResponse} from './simulationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationCollectionResponse(writer: SerializationWriter, simulationCollectionResponse: SimulationCollectionResponse | undefined = {} as SimulationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, simulationCollectionResponse)
        writer.writeCollectionOfObjectValues<Simulation>("value", simulationCollectionResponse.value, serializeSimulation);
}
