import {UserSummary} from './userSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSummary(writer: SerializationWriter, userSummary: UserSummary | undefined = {} as UserSummary) : void {
        writer.writeNumberValue("failedTasks", userSummary.failedTasks);
        writer.writeNumberValue("failedUsers", userSummary.failedUsers);
        writer.writeStringValue("@odata.type", userSummary.odataType);
        writer.writeNumberValue("successfulUsers", userSummary.successfulUsers);
        writer.writeNumberValue("totalTasks", userSummary.totalTasks);
        writer.writeNumberValue("totalUsers", userSummary.totalUsers);
        writer.writeAdditionalData(userSummary.additionalData);
}
