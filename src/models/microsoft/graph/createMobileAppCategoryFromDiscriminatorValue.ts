import {MobileAppCategory} from './mobileAppCategory';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppCategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppCategory();
}
