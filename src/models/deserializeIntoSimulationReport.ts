import {createSimulationReportOverviewFromDiscriminatorValue} from './createSimulationReportOverviewFromDiscriminatorValue';
import {createUserSimulationDetailsFromDiscriminatorValue} from './createUserSimulationDetailsFromDiscriminatorValue';
import {serializeSimulationReportOverview} from './serializeSimulationReportOverview';
import {serializeUserSimulationDetails} from './serializeUserSimulationDetails';
import {SimulationReport} from './simulationReport';
import {SimulationReportOverview} from './simulationReportOverview';
import {UserSimulationDetails} from './userSimulationDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationReport(simulationReport: SimulationReport | undefined = {} as SimulationReport) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { simulationReport.odataType = n.getStringValue(); },
        "overview": n => { simulationReport.overview = n.getObjectValue<SimulationReportOverview>(createSimulationReportOverviewFromDiscriminatorValue); },
        "simulationUsers": n => { simulationReport.simulationUsers = n.getCollectionOfObjectValues<UserSimulationDetails>(createUserSimulationDetailsFromDiscriminatorValue); },
    }
}
