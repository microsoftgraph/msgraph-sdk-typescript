import {MobileAppIdentifierImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppIdentifierImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppIdentifierImpl();
}
