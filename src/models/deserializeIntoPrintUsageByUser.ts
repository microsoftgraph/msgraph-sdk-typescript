import {deserializeIntoPrintUsage} from './deserializeIntoPrintUsage';
import {PrintUsageByUser} from './printUsageByUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByUser(printUsageByUser: PrintUsageByUser | undefined = {} as PrintUsageByUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintUsage(printUsageByUser),
        "userPrincipalName": n => { printUsageByUser.userPrincipalName = n.getStringValue(); },
    }
}
