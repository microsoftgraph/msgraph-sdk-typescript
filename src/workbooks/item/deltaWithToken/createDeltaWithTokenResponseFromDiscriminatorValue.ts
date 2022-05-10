import {DeltaWithTokenResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaWithTokenResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaWithTokenResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaWithTokenResponseImpl();
}
