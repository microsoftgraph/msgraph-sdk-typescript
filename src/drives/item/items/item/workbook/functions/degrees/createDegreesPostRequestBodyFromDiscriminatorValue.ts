import { deserializeIntoDegreesPostRequestBody } from './deserializeIntoDegreesPostRequestBody';
import { type DegreesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDegreesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDegreesPostRequestBody;
}
