import {MobileAppCollectionResponse} from './mobileAppCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppCollectionResponse();
}
