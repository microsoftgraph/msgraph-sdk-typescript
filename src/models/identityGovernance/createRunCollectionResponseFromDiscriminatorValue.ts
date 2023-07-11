import {deserializeIntoRunCollectionResponse} from './deserializeIntoRunCollectionResponse';
import {RunCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRunCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRunCollectionResponse;
}
