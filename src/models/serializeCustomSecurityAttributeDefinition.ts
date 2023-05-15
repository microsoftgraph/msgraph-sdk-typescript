import {AllowedValue} from './allowedValue';
import {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {serializeAllowedValue} from './serializeAllowedValue';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomSecurityAttributeDefinition(writer: SerializationWriter, customSecurityAttributeDefinition: CustomSecurityAttributeDefinition | undefined = {} as CustomSecurityAttributeDefinition) : void {
        serializeEntity(writer, customSecurityAttributeDefinition)
        writer.writeCollectionOfObjectValues<AllowedValue>("allowedValues", customSecurityAttributeDefinition.allowedValues, serializeAllowedValue);
        writer.writeStringValue("attributeSet", customSecurityAttributeDefinition.attributeSet);
        writer.writeStringValue("description", customSecurityAttributeDefinition.description);
        writer.writeBooleanValue("isCollection", customSecurityAttributeDefinition.isCollection);
        writer.writeBooleanValue("isSearchable", customSecurityAttributeDefinition.isSearchable);
        writer.writeStringValue("name", customSecurityAttributeDefinition.name);
        writer.writeStringValue("status", customSecurityAttributeDefinition.status);
        writer.writeStringValue("type", customSecurityAttributeDefinition.type);
        writer.writeBooleanValue("usePreDefinedValuesOnly", customSecurityAttributeDefinition.usePreDefinedValuesOnly);
}
