import {MicrosoftStoreForBusinessAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftStoreForBusinessAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftStoreForBusinessAppCollectionResponse();
}
