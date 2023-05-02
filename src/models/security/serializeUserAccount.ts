import {UserAccount} from './userAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAccount(writer: SerializationWriter, userAccount: UserAccount | undefined = {} as UserAccount) : void {
        writer.writeStringValue("accountName", userAccount.accountName);
        writer.writeStringValue("azureAdUserId", userAccount.azureAdUserId);
        writer.writeStringValue("displayName", userAccount.displayName);
        writer.writeStringValue("domainName", userAccount.domainName);
        writer.writeStringValue("@odata.type", userAccount.odataType);
        writer.writeStringValue("userPrincipalName", userAccount.userPrincipalName);
        writer.writeStringValue("userSid", userAccount.userSid);
        writer.writeAdditionalData(userAccount.additionalData);
}
