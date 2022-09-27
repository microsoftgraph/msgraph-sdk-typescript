import {MobileAppContentFileCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppContentFileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppContentFileCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppContentFileCollectionResponse();
}
