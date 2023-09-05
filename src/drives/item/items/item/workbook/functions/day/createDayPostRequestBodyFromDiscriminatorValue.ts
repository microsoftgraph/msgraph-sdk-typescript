import { deserializeIntoDayPostRequestBody } from './deserializeIntoDayPostRequestBody';
import { type DayPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDayPostRequestBody;
}
