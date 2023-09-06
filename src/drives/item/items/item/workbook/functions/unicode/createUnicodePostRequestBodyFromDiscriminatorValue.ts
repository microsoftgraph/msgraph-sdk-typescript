import { deserializeIntoUnicodePostRequestBody } from './deserializeIntoUnicodePostRequestBody';
import { type UnicodePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnicodePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnicodePostRequestBody;
}
