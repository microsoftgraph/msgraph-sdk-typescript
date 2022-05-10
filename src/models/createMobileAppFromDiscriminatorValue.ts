import {MobileAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppImpl();
}
