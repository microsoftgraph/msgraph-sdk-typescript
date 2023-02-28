import {RomanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRomanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RomanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RomanPostRequestBody();
}
