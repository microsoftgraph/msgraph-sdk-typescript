import {PrintUsageByUser} from './printUsageByUser';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByUser();
}
