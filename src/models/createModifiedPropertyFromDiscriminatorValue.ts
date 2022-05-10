import {ModifiedPropertyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createModifiedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ModifiedPropertyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ModifiedPropertyImpl();
}
