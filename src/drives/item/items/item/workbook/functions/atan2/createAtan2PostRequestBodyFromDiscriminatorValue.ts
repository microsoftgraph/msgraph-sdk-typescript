import {deserializeIntoAtan2PostRequestBody} from './deserializeIntoAtan2PostRequestBody';
import {Atan2PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAtan2PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAtan2PostRequestBody;
}
