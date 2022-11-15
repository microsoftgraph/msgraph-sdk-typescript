import {SimulationReport} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationReportFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationReport {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationReport();
}
