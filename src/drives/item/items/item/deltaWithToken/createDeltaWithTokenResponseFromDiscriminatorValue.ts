import {deserializeIntoDeltaWithTokenResponse} from './deserializeIntoDeltaWithTokenResponse';
import {DeltaWithTokenResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaWithTokenResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeltaWithTokenResponse;
}
