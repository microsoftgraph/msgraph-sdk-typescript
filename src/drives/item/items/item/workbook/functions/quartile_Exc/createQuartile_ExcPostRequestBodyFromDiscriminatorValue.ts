import { deserializeIntoQuartile_ExcPostRequestBody } from './deserializeIntoQuartile_ExcPostRequestBody';
import { type Quartile_ExcPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createQuartile_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQuartile_ExcPostRequestBody;
}
