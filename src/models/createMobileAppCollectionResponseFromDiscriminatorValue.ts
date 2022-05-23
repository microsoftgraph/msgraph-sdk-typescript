import {MobileAppCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppCollectionResponseImpl();
}
