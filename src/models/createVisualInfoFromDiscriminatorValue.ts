import {VisualInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVisualInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : VisualInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VisualInfoImpl();
}
