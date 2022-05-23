import {SharedImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedImpl();
}
