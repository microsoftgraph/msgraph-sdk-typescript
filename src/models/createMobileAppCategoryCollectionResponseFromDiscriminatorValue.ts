import {deserializeIntoMobileAppCategoryCollectionResponse} from './deserializeIntoMobileAppCategoryCollectionResponse';
import {MobileAppCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppCategoryCollectionResponse;
}
