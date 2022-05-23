import {MobileAppCategoryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppCategoryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppCategoryCollectionResponseImpl();
}
