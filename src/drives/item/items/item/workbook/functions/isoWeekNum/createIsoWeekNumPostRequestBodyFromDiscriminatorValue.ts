import {deserializeIntoIsoWeekNumPostRequestBody} from './deserializeIntoIsoWeekNumPostRequestBody';
import {IsoWeekNumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsoWeekNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsoWeekNumPostRequestBody;
}
