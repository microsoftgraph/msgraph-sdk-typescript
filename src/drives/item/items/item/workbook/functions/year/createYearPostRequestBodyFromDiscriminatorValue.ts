import { deserializeIntoYearPostRequestBody } from './deserializeIntoYearPostRequestBody';
import { type YearPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createYearPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYearPostRequestBody;
}
