import {PropertyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PropertyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PropertyImpl();
}
