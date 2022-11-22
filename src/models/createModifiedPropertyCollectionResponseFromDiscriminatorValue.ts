import {ModifiedPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createModifiedPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ModifiedPropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ModifiedPropertyCollectionResponse();
}
