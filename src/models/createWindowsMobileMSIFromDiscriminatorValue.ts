import {WindowsMobileMSI} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMobileMSIFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMobileMSI {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMobileMSI();
}
