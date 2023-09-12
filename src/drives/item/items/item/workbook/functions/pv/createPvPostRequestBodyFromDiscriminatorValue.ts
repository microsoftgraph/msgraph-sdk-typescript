import { deserializeIntoPvPostRequestBody } from './deserializeIntoPvPostRequestBody';
import { type PvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPvPostRequestBody;
}
