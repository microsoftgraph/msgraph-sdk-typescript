import {RunSummary} from './runSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRunSummary(runSummary: RunSummary | undefined = {} as RunSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "failedRuns": n => { runSummary.failedRuns = n.getNumberValue(); },
        "failedTasks": n => { runSummary.failedTasks = n.getNumberValue(); },
        "@odata.type": n => { runSummary.odataType = n.getStringValue(); },
        "successfulRuns": n => { runSummary.successfulRuns = n.getNumberValue(); },
        "totalRuns": n => { runSummary.totalRuns = n.getNumberValue(); },
        "totalTasks": n => { runSummary.totalTasks = n.getNumberValue(); },
        "totalUsers": n => { runSummary.totalUsers = n.getNumberValue(); },
    }
}
