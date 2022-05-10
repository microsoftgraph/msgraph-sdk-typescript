import {MobileAppCategoryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppCategoryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppCategoryImpl();
}
