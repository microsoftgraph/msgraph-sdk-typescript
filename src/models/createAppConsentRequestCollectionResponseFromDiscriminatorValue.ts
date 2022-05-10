import {AppConsentRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestCollectionResponseImpl();
}
