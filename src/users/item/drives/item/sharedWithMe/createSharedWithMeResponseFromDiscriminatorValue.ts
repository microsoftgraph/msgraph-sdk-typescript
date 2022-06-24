import {SharedWithMeResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithMeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedWithMeResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedWithMeResponseImpl();
}
