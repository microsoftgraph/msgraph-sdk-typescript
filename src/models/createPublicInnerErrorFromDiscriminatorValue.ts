import {PublicInnerErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicInnerErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicInnerErrorImpl();
}
