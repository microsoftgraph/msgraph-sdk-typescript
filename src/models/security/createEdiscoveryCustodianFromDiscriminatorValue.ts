import {EdiscoveryCustodian} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCustodianFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryCustodian {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryCustodian();
}
