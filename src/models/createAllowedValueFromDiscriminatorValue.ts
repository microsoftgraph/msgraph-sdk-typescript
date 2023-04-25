import {AllowedValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllowedValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllowedValue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllowedValue();
}
