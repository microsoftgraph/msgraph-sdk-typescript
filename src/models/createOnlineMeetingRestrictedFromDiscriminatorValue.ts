import {deserializeIntoOnlineMeetingRestricted} from './deserializeIntoOnlineMeetingRestricted';
import {OnlineMeetingRestricted} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnlineMeetingRestrictedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnlineMeetingRestricted;
}
