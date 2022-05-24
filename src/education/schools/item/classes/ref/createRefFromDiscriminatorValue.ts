import {RefImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRefFromDiscriminatorValue(parseNode: ParseNode | undefined) : RefImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RefImpl();
}
