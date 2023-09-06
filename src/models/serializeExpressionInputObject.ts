import { type ExpressionInputObject } from './expressionInputObject';
import { type ObjectDefinition } from './objectDefinition';
import { serializeObjectDefinition } from './serializeObjectDefinition';
import { serializeStringKeyObjectValuePair } from './serializeStringKeyObjectValuePair';
import { type StringKeyObjectValuePair } from './stringKeyObjectValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExpressionInputObject(writer: SerializationWriter, expressionInputObject: ExpressionInputObject | undefined = {} as ExpressionInputObject) : void {
        writer.writeObjectValue<ObjectDefinition>("definition", expressionInputObject.definition, serializeObjectDefinition);
        writer.writeStringValue("@odata.type", expressionInputObject.odataType);
        writer.writeCollectionOfObjectValues<StringKeyObjectValuePair>("properties", expressionInputObject.properties, serializeStringKeyObjectValuePair);
        writer.writeAdditionalData(expressionInputObject.additionalData);
}
