import {deserializeIntoCallTranscriptEventMessageDetail} from './deserializeIntoCallTranscriptEventMessageDetail';
import {CallTranscriptEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallTranscriptEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallTranscriptEventMessageDetail;
}
