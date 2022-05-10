import {PrintUsageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageImpl();
}
