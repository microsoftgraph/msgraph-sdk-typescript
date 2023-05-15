import {deserializeIntoDaveragePostRequestBody} from './deserializeIntoDaveragePostRequestBody';
import {DaveragePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDaveragePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDaveragePostRequestBody;
}
