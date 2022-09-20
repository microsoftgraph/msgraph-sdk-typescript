import {UserSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSourceCollectionResponse();
}
