import type {RunSummary} from './runSummary';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRunSummary(writer: SerializationWriter, runSummary: RunSummary | undefined = {} as RunSummary) : void {
        writer.writeNumberValue("failedRuns", runSummary.failedRuns);
        writer.writeNumberValue("failedTasks", runSummary.failedTasks);
        writer.writeStringValue("@odata.type", runSummary.odataType);
        writer.writeNumberValue("successfulRuns", runSummary.successfulRuns);
        writer.writeNumberValue("totalRuns", runSummary.totalRuns);
        writer.writeNumberValue("totalTasks", runSummary.totalTasks);
        writer.writeNumberValue("totalUsers", runSummary.totalUsers);
        writer.writeAdditionalData(runSummary.additionalData);
}
