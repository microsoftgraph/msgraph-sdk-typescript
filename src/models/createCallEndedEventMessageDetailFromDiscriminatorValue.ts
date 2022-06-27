import {CallEndedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallEndedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallEndedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallEndedEventMessageDetailImpl();
}
