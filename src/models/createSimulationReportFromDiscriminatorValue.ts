import { deserializeIntoSimulationReport } from './deserializeIntoSimulationReport';
import { type SimulationReport } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationReportFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationReport;
}
