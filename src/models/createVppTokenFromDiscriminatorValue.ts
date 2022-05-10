import {VppTokenImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVppTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) : VppTokenImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VppTokenImpl();
}
