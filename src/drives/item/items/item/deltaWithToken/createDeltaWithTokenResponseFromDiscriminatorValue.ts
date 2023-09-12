import { deserializeIntoDeltaWithTokenResponse } from './deserializeIntoDeltaWithTokenResponse';
import { type DeltaWithTokenResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeltaWithTokenResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeltaWithTokenResponse;
}
