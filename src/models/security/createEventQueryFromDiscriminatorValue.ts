import {EventQuery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventQuery {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventQuery();
}
