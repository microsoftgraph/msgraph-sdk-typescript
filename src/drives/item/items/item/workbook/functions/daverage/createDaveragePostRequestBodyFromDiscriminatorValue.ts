import { deserializeIntoDaveragePostRequestBody } from './deserializeIntoDaveragePostRequestBody';
import { type DaveragePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDaveragePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDaveragePostRequestBody;
}
