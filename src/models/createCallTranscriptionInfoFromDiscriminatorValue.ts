import { deserializeIntoCallTranscriptionInfo } from './deserializeIntoCallTranscriptionInfo';
import { type CallTranscriptionInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallTranscriptionInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallTranscriptionInfo;
}
