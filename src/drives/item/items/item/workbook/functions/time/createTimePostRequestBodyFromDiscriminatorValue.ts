import {deserializeIntoTimePostRequestBody} from './deserializeIntoTimePostRequestBody';
import {TimePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimePostRequestBody;
}
