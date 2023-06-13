import {deserializeIntoAttributeMapping} from './deserializeIntoAttributeMapping';
import {AttributeMapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeMappingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMapping;
}
