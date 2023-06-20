import {AttributeSet} from './attributeSet';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeSet(attributeSet: AttributeSet | undefined = {} as AttributeSet, writer: SerializationWriter) : void {
        serializeEntity(writer, attributeSet)
        writer.writeStringValue("description", attributeSet.description);
        writer.writeNumberValue("maxAttributesPerSet", attributeSet.maxAttributesPerSet);
}
