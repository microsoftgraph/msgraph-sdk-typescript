import {deserializeIntoApplyIconFilterPostRequestBody} from './deserializeIntoApplyIconFilterPostRequestBody';
import {ApplyIconFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyIconFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyIconFilterPostRequestBody;
}
