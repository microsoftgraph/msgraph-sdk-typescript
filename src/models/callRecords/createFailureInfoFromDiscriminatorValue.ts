import {FailureInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFailureInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : FailureInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FailureInfoImpl();
}
