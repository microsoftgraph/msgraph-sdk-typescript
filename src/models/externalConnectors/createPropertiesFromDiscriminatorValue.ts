import { deserializeIntoProperties } from './deserializeIntoProperties';
import { type Properties } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProperties;
}
