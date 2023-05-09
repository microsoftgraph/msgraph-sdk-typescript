import {deserializeIntoApplicationCollectionResponse} from './deserializeIntoApplicationCollectionResponse';
import {ApplicationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationCollectionResponse;
}
