import {CallTranscriptEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallTranscriptEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallTranscriptEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallTranscriptEventMessageDetailImpl();
}
