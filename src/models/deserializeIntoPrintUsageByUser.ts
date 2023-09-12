import { deserializeIntoPrintUsage } from './deserializeIntoPrintUsage';
import { type PrintUsageByUser } from './printUsageByUser';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByUser(printUsageByUser: PrintUsageByUser | undefined = {} as PrintUsageByUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintUsage(printUsageByUser),
        "userPrincipalName": n => { printUsageByUser.userPrincipalName = n.getStringValue(); },
    }
}
