import {LoggedOnUser} from './loggedOnUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLoggedOnUser(loggedOnUser: LoggedOnUser | undefined = {} as LoggedOnUser) : Record<string, (node: ParseNode) => void> {
    return {
        "accountName": n => { loggedOnUser.accountName = n.getStringValue(); },
        "domainName": n => { loggedOnUser.domainName = n.getStringValue(); },
        "@odata.type": n => { loggedOnUser.odataType = n.getStringValue(); },
    }
}
