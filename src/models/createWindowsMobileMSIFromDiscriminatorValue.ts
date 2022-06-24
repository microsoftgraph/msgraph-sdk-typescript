import {WindowsMobileMSIImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMobileMSIFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMobileMSIImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMobileMSIImpl();
}
