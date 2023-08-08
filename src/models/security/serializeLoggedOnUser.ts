import type {LoggedOnUser} from './loggedOnUser';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLoggedOnUser(writer: SerializationWriter, loggedOnUser: LoggedOnUser | undefined = {} as LoggedOnUser) : void {
        writer.writeStringValue("accountName", loggedOnUser.accountName);
        writer.writeStringValue("domainName", loggedOnUser.domainName);
        writer.writeStringValue("@odata.type", loggedOnUser.odataType);
        writer.writeAdditionalData(loggedOnUser.additionalData);
}
