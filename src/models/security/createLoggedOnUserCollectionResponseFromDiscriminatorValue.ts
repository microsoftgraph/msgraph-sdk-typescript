import {LoggedOnUserCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLoggedOnUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LoggedOnUserCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LoggedOnUserCollectionResponse();
}
