import {deserializeIntoEventQuery} from './deserializeIntoEventQuery';
import {EventQuery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventQuery;
}
