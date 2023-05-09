import {PrintUsageByUser} from './printUsageByUser';
import {serializePrintUsage} from './serializePrintUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByUser(writer: SerializationWriter, printUsageByUser: PrintUsageByUser | undefined = {} as PrintUsageByUser) : void {
        serializePrintUsage(writer, printUsageByUser)
        writer.writeStringValue("userPrincipalName", printUsageByUser.userPrincipalName);
}
