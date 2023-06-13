import {createObjectDefinitionFromDiscriminatorValue} from './createObjectDefinitionFromDiscriminatorValue';
import {createStringKeyObjectValuePairFromDiscriminatorValue} from './createStringKeyObjectValuePairFromDiscriminatorValue';
import {ExpressionInputObject} from './expressionInputObject';
import {ObjectDefinition} from './objectDefinition';
import {serializeObjectDefinition} from './serializeObjectDefinition';
import {serializeStringKeyObjectValuePair} from './serializeStringKeyObjectValuePair';
import {StringKeyObjectValuePair} from './stringKeyObjectValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExpressionInputObject(expressionInputObject: ExpressionInputObject | undefined = {} as ExpressionInputObject) : Record<string, (node: ParseNode) => void> {
    return {
        "definition": n => { expressionInputObject.definition = n.getObjectValue<ObjectDefinition>(createObjectDefinitionFromDiscriminatorValue); },
        "@odata.type": n => { expressionInputObject.odataType = n.getStringValue(); },
        "properties": n => { expressionInputObject.properties = n.getCollectionOfObjectValues<StringKeyObjectValuePair>(createStringKeyObjectValuePairFromDiscriminatorValue); },
    }
}
