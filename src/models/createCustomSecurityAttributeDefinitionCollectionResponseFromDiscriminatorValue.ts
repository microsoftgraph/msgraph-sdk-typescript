import {CustomSecurityAttributeDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CustomSecurityAttributeDefinitionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CustomSecurityAttributeDefinitionCollectionResponse();
}
