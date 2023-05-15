import {serializeEntity} from './serializeEntity';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationRunStatus} from './simulationAutomationRunStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomationRun(writer: SerializationWriter, simulationAutomationRun: SimulationAutomationRun | undefined = {} as SimulationAutomationRun) : void {
        serializeEntity(writer, simulationAutomationRun)
        writer.writeDateValue("endDateTime", simulationAutomationRun.endDateTime);
        writer.writeStringValue("simulationId", simulationAutomationRun.simulationId);
        writer.writeDateValue("startDateTime", simulationAutomationRun.startDateTime);
        writer.writeEnumValue<SimulationAutomationRunStatus>("status", simulationAutomationRun.status);
}
