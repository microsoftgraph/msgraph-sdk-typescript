import {CheckinRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckinRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckinRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckinRequestBodyImpl();
}
