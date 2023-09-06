import { deserializeIntoDaysPostRequestBody } from './deserializeIntoDaysPostRequestBody';
import { type DaysPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDaysPostRequestBody;
}
