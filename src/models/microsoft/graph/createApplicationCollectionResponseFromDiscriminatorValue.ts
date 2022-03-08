import {ApplicationCollectionResponse} from './applicationCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationCollectionResponse();
}
