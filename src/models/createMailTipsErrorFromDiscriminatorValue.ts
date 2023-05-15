import {deserializeIntoMailTipsError} from './deserializeIntoMailTipsError';
import {MailTipsError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailTipsErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailTipsError;
}
