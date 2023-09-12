import { deserializeIntoOnlineMeetingInfo } from './deserializeIntoOnlineMeetingInfo';
import { type OnlineMeetingInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnlineMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnlineMeetingInfo;
}
