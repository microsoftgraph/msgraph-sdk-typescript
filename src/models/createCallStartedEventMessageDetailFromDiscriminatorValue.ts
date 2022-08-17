import {CallStartedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallStartedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallStartedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallStartedEventMessageDetail();
}
