import {UnicodePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnicodePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnicodePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnicodePostRequestBody();
}
