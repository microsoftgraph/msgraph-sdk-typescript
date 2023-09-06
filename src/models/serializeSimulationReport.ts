import { serializeSimulationReportOverview } from './serializeSimulationReportOverview';
import { serializeUserSimulationDetails } from './serializeUserSimulationDetails';
import { type SimulationReport } from './simulationReport';
import { type SimulationReportOverview } from './simulationReportOverview';
import { type UserSimulationDetails } from './userSimulationDetails';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSimulationReport(writer: SerializationWriter, simulationReport: SimulationReport | undefined = {} as SimulationReport) : void {
        writer.writeStringValue("@odata.type", simulationReport.odataType);
        writer.writeObjectValue<SimulationReportOverview>("overview", simulationReport.overview, serializeSimulationReportOverview);
        writer.writeCollectionOfObjectValues<UserSimulationDetails>("simulationUsers", simulationReport.simulationUsers, serializeUserSimulationDetails);
        writer.writeAdditionalData(simulationReport.additionalData);
}
