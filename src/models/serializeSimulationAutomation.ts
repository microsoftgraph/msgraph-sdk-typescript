import {EmailIdentity} from './emailIdentity';
import {serializeEmailIdentity} from './serializeEmailIdentity';
import {serializeEntity} from './serializeEntity';
import {serializeSimulationAutomationRun} from './serializeSimulationAutomationRun';
import {SimulationAutomation} from './simulationAutomation';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomation(writer: SerializationWriter, simulationAutomation: SimulationAutomation | undefined = {} as SimulationAutomation) : void {
        serializeEntity(writer, simulationAutomation)
        writer.writeObjectValue<EmailIdentity>("createdBy", simulationAutomation.createdBy, serializeEmailIdentity);
        writer.writeDateValue("createdDateTime", simulationAutomation.createdDateTime);
        writer.writeStringValue("description", simulationAutomation.description);
        writer.writeStringValue("displayName", simulationAutomation.displayName);
        writer.writeObjectValue<EmailIdentity>("lastModifiedBy", simulationAutomation.lastModifiedBy, serializeEmailIdentity);
        writer.writeDateValue("lastModifiedDateTime", simulationAutomation.lastModifiedDateTime);
        writer.writeDateValue("lastRunDateTime", simulationAutomation.lastRunDateTime);
        writer.writeDateValue("nextRunDateTime", simulationAutomation.nextRunDateTime);
        writer.writeCollectionOfObjectValues<SimulationAutomationRun>("runs", simulationAutomation.runs, serializeSimulationAutomationRun);
        writer.writeEnumValue<SimulationAutomationStatus>("status", simulationAutomation.status);
}
