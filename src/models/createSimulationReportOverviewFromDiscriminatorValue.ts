import {SimulationReportOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationReportOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationReportOverview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationReportOverview();
}
