import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationRunStatus} from './simulationAutomationRunStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationRun(simulationAutomationRun: SimulationAutomationRun | undefined = {} as SimulationAutomationRun) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(simulationAutomationRun),
        "endDateTime": n => { simulationAutomationRun.endDateTime = n.getDateValue(); },
        "simulationId": n => { simulationAutomationRun.simulationId = n.getStringValue(); },
        "startDateTime": n => { simulationAutomationRun.startDateTime = n.getDateValue(); },
        "status": n => { simulationAutomationRun.status = n.getEnumValue<SimulationAutomationRunStatus>(SimulationAutomationRunStatus); },
    }
}
