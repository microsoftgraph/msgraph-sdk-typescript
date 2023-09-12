import { type PrintUsageByUser } from './printUsageByUser';
import { serializePrintUsage } from './serializePrintUsage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintUsageByUser(writer: SerializationWriter, printUsageByUser: PrintUsageByUser | undefined = {} as PrintUsageByUser) : void {
        serializePrintUsage(writer, printUsageByUser)
        writer.writeStringValue("userPrincipalName", printUsageByUser.userPrincipalName);
}
