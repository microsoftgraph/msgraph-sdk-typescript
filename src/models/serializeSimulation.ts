import {EmailIdentity} from './emailIdentity';
import {PayloadDeliveryPlatform} from './payloadDeliveryPlatform';
import {serializeEmailIdentity} from './serializeEmailIdentity';
import {serializeEntity} from './serializeEntity';
import {serializeSimulationReport} from './serializeSimulationReport';
import {Simulation} from './simulation';
import {SimulationAttackTechnique} from './simulationAttackTechnique';
import {SimulationAttackType} from './simulationAttackType';
import {SimulationReport} from './simulationReport';
import {SimulationStatus} from './simulationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulation(writer: SerializationWriter, simulation: Simulation | undefined = {} as Simulation) : void {
        serializeEntity(writer, simulation)
        writer.writeEnumValue<SimulationAttackTechnique>("attackTechnique", simulation.attackTechnique);
        writer.writeEnumValue<SimulationAttackType>("attackType", simulation.attackType);
        writer.writeStringValue("automationId", simulation.automationId);
        writer.writeDateValue("completionDateTime", simulation.completionDateTime);
        writer.writeObjectValue<EmailIdentity>("createdBy", simulation.createdBy, serializeEmailIdentity);
        writer.writeDateValue("createdDateTime", simulation.createdDateTime);
        writer.writeStringValue("description", simulation.description);
        writer.writeStringValue("displayName", simulation.displayName);
        writer.writeBooleanValue("isAutomated", simulation.isAutomated);
        writer.writeObjectValue<EmailIdentity>("lastModifiedBy", simulation.lastModifiedBy, serializeEmailIdentity);
        writer.writeDateValue("lastModifiedDateTime", simulation.lastModifiedDateTime);
        writer.writeDateValue("launchDateTime", simulation.launchDateTime);
        writer.writeEnumValue<PayloadDeliveryPlatform>("payloadDeliveryPlatform", simulation.payloadDeliveryPlatform);
        writer.writeObjectValue<SimulationReport>("report", simulation.report, serializeSimulationReport);
        writer.writeEnumValue<SimulationStatus>("status", simulation.status);
}
