import {deserializeIntoDays360PostRequestBody} from './deserializeIntoDays360PostRequestBody';
import {Days360PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDays360PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDays360PostRequestBody;
}
