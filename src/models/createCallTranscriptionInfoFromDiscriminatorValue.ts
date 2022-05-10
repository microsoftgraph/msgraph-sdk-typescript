import {CallTranscriptionInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallTranscriptionInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallTranscriptionInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallTranscriptionInfoImpl();
}
