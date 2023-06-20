import {ExpressionInputObject} from './expressionInputObject';
import {ObjectDefinition} from './objectDefinition';
import {serializeObjectDefinition} from './serializeObjectDefinition';
import {serializeStringKeyObjectValuePair} from './serializeStringKeyObjectValuePair';
import {StringKeyObjectValuePair} from './stringKeyObjectValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpressionInputObject(expressionInputObject: ExpressionInputObject | undefined = {} as ExpressionInputObject, writer: SerializationWriter) : void {
        writer.writeObjectValue<ObjectDefinition>("definition", expressionInputObject.definition, serializeObjectDefinition);
        writer.writeStringValue("@odata.type", expressionInputObject.odataType);
        writer.writeCollectionOfObjectValues<StringKeyObjectValuePair>("properties", expressionInputObject.properties, serializeStringKeyObjectValuePair);
        writer.writeAdditionalData(expressionInputObject.additionalData);
}
