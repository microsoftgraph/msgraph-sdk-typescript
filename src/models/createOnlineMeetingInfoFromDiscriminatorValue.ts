import {OnlineMeetingInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnlineMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnlineMeetingInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnlineMeetingInfoImpl();
}
