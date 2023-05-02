import {deserializeIntoMobileAppCategory} from './deserializeIntoMobileAppCategory';
import {MobileAppCategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppCategory;
}
