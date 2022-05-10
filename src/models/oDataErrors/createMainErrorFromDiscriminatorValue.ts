import {MainErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMainErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : MainErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MainErrorImpl();
}
