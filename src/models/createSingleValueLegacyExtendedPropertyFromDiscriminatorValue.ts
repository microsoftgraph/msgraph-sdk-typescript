import { deserializeIntoSingleValueLegacyExtendedProperty } from './deserializeIntoSingleValueLegacyExtendedProperty';
import { type SingleValueLegacyExtendedProperty } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSingleValueLegacyExtendedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSingleValueLegacyExtendedProperty;
}
