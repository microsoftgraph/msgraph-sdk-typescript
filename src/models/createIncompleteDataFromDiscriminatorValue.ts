import {deserializeIntoIncompleteData} from './deserializeIntoIncompleteData';
import {IncompleteData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncompleteDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIncompleteData;
}
