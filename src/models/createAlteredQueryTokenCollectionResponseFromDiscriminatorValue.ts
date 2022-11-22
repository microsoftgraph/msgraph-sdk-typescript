import {AlteredQueryTokenCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlteredQueryTokenCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlteredQueryTokenCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlteredQueryTokenCollectionResponse();
}
