import {PublicErrorDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicErrorDetailCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicErrorDetailCollectionResponse();
}
