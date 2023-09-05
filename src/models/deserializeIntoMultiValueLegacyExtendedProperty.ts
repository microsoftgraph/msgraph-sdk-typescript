import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type MultiValueLegacyExtendedProperty } from './multiValueLegacyExtendedProperty';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMultiValueLegacyExtendedProperty(multiValueLegacyExtendedProperty: MultiValueLegacyExtendedProperty | undefined = {} as MultiValueLegacyExtendedProperty) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(multiValueLegacyExtendedProperty),
        "value": n => { multiValueLegacyExtendedProperty.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
