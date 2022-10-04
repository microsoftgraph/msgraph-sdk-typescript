import {PropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PropertyCollectionResponse();
}
