import {deserializeIntoSimulationReportOverview} from './deserializeIntoSimulationReportOverview';
import {SimulationReportOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationReportOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationReportOverview;
}
