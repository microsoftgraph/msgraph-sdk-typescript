import {CheckinRequestBody} from './checkinRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckinRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckinRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckinRequestBody();
}
