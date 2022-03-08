import {MobileAppCategoryCollectionResponse} from './mobileAppCategoryCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppCategoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppCategoryCollectionResponse();
}
