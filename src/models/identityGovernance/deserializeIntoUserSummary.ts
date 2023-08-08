import type {UserSummary} from './userSummary';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSummary(userSummary: UserSummary | undefined = {} as UserSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "failedTasks": n => { userSummary.failedTasks = n.getNumberValue(); },
        "failedUsers": n => { userSummary.failedUsers = n.getNumberValue(); },
        "@odata.type": n => { userSummary.odataType = n.getStringValue(); },
        "successfulUsers": n => { userSummary.successfulUsers = n.getNumberValue(); },
        "totalTasks": n => { userSummary.totalTasks = n.getNumberValue(); },
        "totalUsers": n => { userSummary.totalUsers = n.getNumberValue(); },
    }
}
