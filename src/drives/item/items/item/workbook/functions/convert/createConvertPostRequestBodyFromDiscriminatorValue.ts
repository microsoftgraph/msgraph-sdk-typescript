import {deserializeIntoConvertPostRequestBody} from './deserializeIntoConvertPostRequestBody';
import {ConvertPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConvertPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConvertPostRequestBody;
}
