import {deserializeIntoArabicPostRequestBody} from './deserializeIntoArabicPostRequestBody';
import {ArabicPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArabicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArabicPostRequestBody;
}
