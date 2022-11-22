import {UserAttributeValuesItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAttributeValuesItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAttributeValuesItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAttributeValuesItemCollectionResponse();
}
