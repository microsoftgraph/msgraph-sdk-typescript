import {createCustomSecurityAttributeDefinitionFromDiscriminatorValue} from './createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {CustomSecurityAttributeDefinitionCollectionResponse} from './customSecurityAttributeDefinitionCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCustomSecurityAttributeDefinition} from './serializeCustomSecurityAttributeDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomSecurityAttributeDefinitionCollectionResponse(customSecurityAttributeDefinitionCollectionResponse: CustomSecurityAttributeDefinitionCollectionResponse | undefined = {} as CustomSecurityAttributeDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(customSecurityAttributeDefinitionCollectionResponse),
        "value": n => { customSecurityAttributeDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<CustomSecurityAttributeDefinition>(createCustomSecurityAttributeDefinitionFromDiscriminatorValue); },
    }
}
