import {PrintUsageByUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByUserImpl();
}
