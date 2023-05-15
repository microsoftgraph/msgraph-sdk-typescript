import {createEmailIdentityFromDiscriminatorValue} from './createEmailIdentityFromDiscriminatorValue';
import {createSimulationAutomationRunFromDiscriminatorValue} from './createSimulationAutomationRunFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EmailIdentity} from './emailIdentity';
import {serializeEmailIdentity} from './serializeEmailIdentity';
import {serializeSimulationAutomationRun} from './serializeSimulationAutomationRun';
import {SimulationAutomation} from './simulationAutomation';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomation(simulationAutomation: SimulationAutomation | undefined = {} as SimulationAutomation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(simulationAutomation),
        "createdBy": n => { simulationAutomation.createdBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { simulationAutomation.createdDateTime = n.getDateValue(); },
        "description": n => { simulationAutomation.description = n.getStringValue(); },
        "displayName": n => { simulationAutomation.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { simulationAutomation.lastModifiedBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { simulationAutomation.lastModifiedDateTime = n.getDateValue(); },
        "lastRunDateTime": n => { simulationAutomation.lastRunDateTime = n.getDateValue(); },
        "nextRunDateTime": n => { simulationAutomation.nextRunDateTime = n.getDateValue(); },
        "runs": n => { simulationAutomation.runs = n.getCollectionOfObjectValues<SimulationAutomationRun>(createSimulationAutomationRunFromDiscriminatorValue); },
        "status": n => { simulationAutomation.status = n.getEnumValue<SimulationAutomationStatus>(SimulationAutomationStatus); },
    }
}
