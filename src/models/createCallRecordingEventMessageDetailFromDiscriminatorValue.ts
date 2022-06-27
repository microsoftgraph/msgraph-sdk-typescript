import {CallRecordingEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordingEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallRecordingEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallRecordingEventMessageDetailImpl();
}
