import {PropertiesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PropertiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PropertiesImpl();
}
