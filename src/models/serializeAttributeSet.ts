import {AttributeSet} from './attributeSet';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeSet(writer: SerializationWriter, attributeSet: AttributeSet | undefined = {} as AttributeSet) : void {
        serializeEntity(writer, attributeSet)
        writer.writeStringValue("description", attributeSet.description);
        writer.writeNumberValue("maxAttributesPerSet", attributeSet.maxAttributesPerSet);
}
