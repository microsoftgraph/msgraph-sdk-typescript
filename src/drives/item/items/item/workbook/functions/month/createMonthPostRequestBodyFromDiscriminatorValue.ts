import { deserializeIntoMonthPostRequestBody } from './deserializeIntoMonthPostRequestBody';
import { type MonthPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMonthPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMonthPostRequestBody;
}
