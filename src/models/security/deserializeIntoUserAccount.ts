import {UserAccount} from './userAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAccount(userAccount: UserAccount | undefined = {} as UserAccount) : Record<string, (node: ParseNode) => void> {
    return {
        "accountName": n => { userAccount.accountName = n.getStringValue(); },
        "azureAdUserId": n => { userAccount.azureAdUserId = n.getStringValue(); },
        "displayName": n => { userAccount.displayName = n.getStringValue(); },
        "domainName": n => { userAccount.domainName = n.getStringValue(); },
        "@odata.type": n => { userAccount.odataType = n.getStringValue(); },
        "userPrincipalName": n => { userAccount.userPrincipalName = n.getStringValue(); },
        "userSid": n => { userAccount.userSid = n.getStringValue(); },
    }
}
