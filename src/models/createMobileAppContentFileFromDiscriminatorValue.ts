import {MobileAppContentFileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppContentFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppContentFileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppContentFileImpl();
}
