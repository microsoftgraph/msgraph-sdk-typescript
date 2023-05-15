import {createEmailIdentityFromDiscriminatorValue} from './createEmailIdentityFromDiscriminatorValue';
import {createSimulationReportFromDiscriminatorValue} from './createSimulationReportFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EmailIdentity} from './emailIdentity';
import {PayloadDeliveryPlatform} from './payloadDeliveryPlatform';
import {serializeEmailIdentity} from './serializeEmailIdentity';
import {serializeSimulationReport} from './serializeSimulationReport';
import {Simulation} from './simulation';
import {SimulationAttackTechnique} from './simulationAttackTechnique';
import {SimulationAttackType} from './simulationAttackType';
import {SimulationReport} from './simulationReport';
import {SimulationStatus} from './simulationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulation(simulation: Simulation | undefined = {} as Simulation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(simulation),
        "attackTechnique": n => { simulation.attackTechnique = n.getEnumValue<SimulationAttackTechnique>(SimulationAttackTechnique); },
        "attackType": n => { simulation.attackType = n.getEnumValue<SimulationAttackType>(SimulationAttackType); },
        "automationId": n => { simulation.automationId = n.getStringValue(); },
        "completionDateTime": n => { simulation.completionDateTime = n.getDateValue(); },
        "createdBy": n => { simulation.createdBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { simulation.createdDateTime = n.getDateValue(); },
        "description": n => { simulation.description = n.getStringValue(); },
        "displayName": n => { simulation.displayName = n.getStringValue(); },
        "isAutomated": n => { simulation.isAutomated = n.getBooleanValue(); },
        "lastModifiedBy": n => { simulation.lastModifiedBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { simulation.lastModifiedDateTime = n.getDateValue(); },
        "launchDateTime": n => { simulation.launchDateTime = n.getDateValue(); },
        "payloadDeliveryPlatform": n => { simulation.payloadDeliveryPlatform = n.getEnumValue<PayloadDeliveryPlatform>(PayloadDeliveryPlatform); },
        "report": n => { simulation.report = n.getObjectValue<SimulationReport>(createSimulationReportFromDiscriminatorValue); },
        "status": n => { simulation.status = n.getEnumValue<SimulationStatus>(SimulationStatus); },
    }
}
