import {MobileContainedAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileContainedAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileContainedAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileContainedAppCollectionResponse();
}
