import {deserializeIntoDaysPostRequestBody} from './deserializeIntoDaysPostRequestBody';
import {DaysPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDaysPostRequestBody;
}
