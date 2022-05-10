import {DeltaResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaResponseImpl();
}
