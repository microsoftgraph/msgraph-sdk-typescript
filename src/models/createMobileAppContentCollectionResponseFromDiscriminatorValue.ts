import {MobileAppContentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppContentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppContentCollectionResponse();
}
