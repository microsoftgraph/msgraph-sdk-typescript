import { deserializeIntoIsoWeekNumPostRequestBody } from './deserializeIntoIsoWeekNumPostRequestBody';
import { type IsoWeekNumPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsoWeekNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsoWeekNumPostRequestBody;
}
