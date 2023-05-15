import {deserializeIntoImaginaryPostRequestBody} from './deserializeIntoImaginaryPostRequestBody';
import {ImaginaryPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImaginaryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImaginaryPostRequestBody;
}
