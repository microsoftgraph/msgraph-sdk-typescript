import {InnerErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : InnerErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InnerErrorImpl();
}
