import {CheckinPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckinPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckinPostRequestBodyImpl();
}
