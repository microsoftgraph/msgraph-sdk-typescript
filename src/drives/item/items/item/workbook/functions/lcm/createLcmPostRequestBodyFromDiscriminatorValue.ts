import { deserializeIntoLcmPostRequestBody } from './deserializeIntoLcmPostRequestBody';
import { type LcmPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLcmPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLcmPostRequestBody;
}
