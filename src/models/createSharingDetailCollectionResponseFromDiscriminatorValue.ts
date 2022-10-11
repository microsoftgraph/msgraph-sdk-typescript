import {SharingDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharingDetailCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharingDetailCollectionResponse();
}
