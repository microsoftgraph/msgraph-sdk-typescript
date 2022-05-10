import {PublicErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicErrorImpl();
}
