import {AttributeSet} from './attributeSet';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeSet(attributeSet: AttributeSet | undefined = {} as AttributeSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attributeSet),
        "description": n => { attributeSet.description = n.getStringValue(); },
        "maxAttributesPerSet": n => { attributeSet.maxAttributesPerSet = n.getNumberValue(); },
    }
}
