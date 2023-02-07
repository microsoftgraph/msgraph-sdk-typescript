import {ArabicPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArabicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArabicPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArabicPostRequestBody();
}
