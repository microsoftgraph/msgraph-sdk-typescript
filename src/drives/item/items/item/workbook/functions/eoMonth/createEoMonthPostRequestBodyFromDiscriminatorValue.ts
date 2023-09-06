import { deserializeIntoEoMonthPostRequestBody } from './deserializeIntoEoMonthPostRequestBody';
import { type EoMonthPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEoMonthPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEoMonthPostRequestBody;
}
