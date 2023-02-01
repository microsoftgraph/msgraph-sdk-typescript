import {CheckinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckinPostRequestBody();
}
