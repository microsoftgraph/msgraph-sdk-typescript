import {deserializeIntoApplyCellColorFilterPostRequestBody} from './deserializeIntoApplyCellColorFilterPostRequestBody';
import {ApplyCellColorFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyCellColorFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyCellColorFilterPostRequestBody;
}
