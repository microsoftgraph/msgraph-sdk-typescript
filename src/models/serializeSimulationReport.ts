import {serializeSimulationReportOverview} from './serializeSimulationReportOverview';
import {serializeUserSimulationDetails} from './serializeUserSimulationDetails';
import {SimulationReport} from './simulationReport';
import {SimulationReportOverview} from './simulationReportOverview';
import {UserSimulationDetails} from './userSimulationDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationReport(writer: SerializationWriter, simulationReport: SimulationReport | undefined = {} as SimulationReport) : void {
        writer.writeStringValue("@odata.type", simulationReport.odataType);
        writer.writeObjectValue<SimulationReportOverview>("overview", simulationReport.overview, serializeSimulationReportOverview);
        writer.writeCollectionOfObjectValues<UserSimulationDetails>("simulationUsers", simulationReport.simulationUsers, serializeUserSimulationDetails);
        writer.writeAdditionalData(simulationReport.additionalData);
}
