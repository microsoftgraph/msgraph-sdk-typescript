import {EBookInstallSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEBookInstallSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : EBookInstallSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EBookInstallSummaryImpl();
}
