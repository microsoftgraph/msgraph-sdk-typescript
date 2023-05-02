import {deserializeIntoDgetPostRequestBody} from './deserializeIntoDgetPostRequestBody';
import {DgetPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDgetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDgetPostRequestBody;
}
