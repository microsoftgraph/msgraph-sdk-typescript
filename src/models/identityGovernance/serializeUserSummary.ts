import { type UserSummary } from './userSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserSummary(writer: SerializationWriter, userSummary: UserSummary | undefined = {} as UserSummary) : void {
        writer.writeNumberValue("failedTasks", userSummary.failedTasks);
        writer.writeNumberValue("failedUsers", userSummary.failedUsers);
        writer.writeStringValue("@odata.type", userSummary.odataType);
        writer.writeNumberValue("successfulUsers", userSummary.successfulUsers);
        writer.writeNumberValue("totalTasks", userSummary.totalTasks);
        writer.writeNumberValue("totalUsers", userSummary.totalUsers);
        writer.writeAdditionalData(userSummary.additionalData);
}
