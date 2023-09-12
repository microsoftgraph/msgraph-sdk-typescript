import { createSimulationReportOverviewFromDiscriminatorValue } from './createSimulationReportOverviewFromDiscriminatorValue';
import { createUserSimulationDetailsFromDiscriminatorValue } from './createUserSimulationDetailsFromDiscriminatorValue';
import { serializeSimulationReportOverview } from './serializeSimulationReportOverview';
import { serializeUserSimulationDetails } from './serializeUserSimulationDetails';
import { type SimulationReport } from './simulationReport';
import { type SimulationReportOverview } from './simulationReportOverview';
import { type UserSimulationDetails } from './userSimulationDetails';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationReport(simulationReport: SimulationReport | undefined = {} as SimulationReport) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { simulationReport.odataType = n.getStringValue(); },
        "overview": n => { simulationReport.overview = n.getObjectValue<SimulationReportOverview>(createSimulationReportOverviewFromDiscriminatorValue); },
        "simulationUsers": n => { simulationReport.simulationUsers = n.getCollectionOfObjectValues<UserSimulationDetails>(createUserSimulationDetailsFromDiscriminatorValue); },
    }
}
