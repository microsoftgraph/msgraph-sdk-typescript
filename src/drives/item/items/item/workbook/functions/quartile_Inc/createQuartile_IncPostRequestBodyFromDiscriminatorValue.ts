import { deserializeIntoQuartile_IncPostRequestBody } from './deserializeIntoQuartile_IncPostRequestBody';
import { type Quartile_IncPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createQuartile_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQuartile_IncPostRequestBody;
}
