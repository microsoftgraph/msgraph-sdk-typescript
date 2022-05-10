import {BaseItemVersionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemVersionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseItemVersionImpl();
}
