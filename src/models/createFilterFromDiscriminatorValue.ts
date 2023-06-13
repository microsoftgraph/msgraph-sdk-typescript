import {deserializeIntoFilter} from './deserializeIntoFilter';
import {Filter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilter;
}
