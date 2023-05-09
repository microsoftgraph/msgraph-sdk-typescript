import {deserializeIntoPvPostRequestBody} from './deserializeIntoPvPostRequestBody';
import {PvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPvPostRequestBody;
}
