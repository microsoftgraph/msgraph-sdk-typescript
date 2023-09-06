import { deserializeIntoCustomSecurityAttributeDefinitionCollectionResponse } from './deserializeIntoCustomSecurityAttributeDefinitionCollectionResponse';
import { type CustomSecurityAttributeDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomSecurityAttributeDefinitionCollectionResponse;
}
