import {deserializeIntoGetMailTipsResponse} from './deserializeIntoGetMailTipsResponse';
import {GetMailTipsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMailTipsResponse;
}
