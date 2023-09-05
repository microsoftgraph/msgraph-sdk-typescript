import { deserializeIntoMultiValueLegacyExtendedProperty } from './deserializeIntoMultiValueLegacyExtendedProperty';
import { type MultiValueLegacyExtendedProperty } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMultiValueLegacyExtendedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMultiValueLegacyExtendedProperty;
}
