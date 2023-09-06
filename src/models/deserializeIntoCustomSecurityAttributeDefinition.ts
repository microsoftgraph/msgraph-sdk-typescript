import { type AllowedValue } from './allowedValue';
import { createAllowedValueFromDiscriminatorValue } from './createAllowedValueFromDiscriminatorValue';
import { type CustomSecurityAttributeDefinition } from './customSecurityAttributeDefinition';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAllowedValue } from './serializeAllowedValue';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomSecurityAttributeDefinition(customSecurityAttributeDefinition: CustomSecurityAttributeDefinition | undefined = {} as CustomSecurityAttributeDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(customSecurityAttributeDefinition),
        "allowedValues": n => { customSecurityAttributeDefinition.allowedValues = n.getCollectionOfObjectValues<AllowedValue>(createAllowedValueFromDiscriminatorValue); },
        "attributeSet": n => { customSecurityAttributeDefinition.attributeSet = n.getStringValue(); },
        "description": n => { customSecurityAttributeDefinition.description = n.getStringValue(); },
        "isCollection": n => { customSecurityAttributeDefinition.isCollection = n.getBooleanValue(); },
        "isSearchable": n => { customSecurityAttributeDefinition.isSearchable = n.getBooleanValue(); },
        "name": n => { customSecurityAttributeDefinition.name = n.getStringValue(); },
        "status": n => { customSecurityAttributeDefinition.status = n.getStringValue(); },
        "type": n => { customSecurityAttributeDefinition.type = n.getStringValue(); },
        "usePreDefinedValuesOnly": n => { customSecurityAttributeDefinition.usePreDefinedValuesOnly = n.getBooleanValue(); },
    }
}
