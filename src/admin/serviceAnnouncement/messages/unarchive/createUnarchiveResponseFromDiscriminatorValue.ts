import {deserializeIntoUnarchiveResponse} from './deserializeIntoUnarchiveResponse';
import {UnarchiveResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnarchiveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnarchiveResponse;
}
