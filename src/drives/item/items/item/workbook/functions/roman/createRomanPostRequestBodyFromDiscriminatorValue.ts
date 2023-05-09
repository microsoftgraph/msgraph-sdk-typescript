import {deserializeIntoRomanPostRequestBody} from './deserializeIntoRomanPostRequestBody';
import {RomanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRomanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRomanPostRequestBody;
}
