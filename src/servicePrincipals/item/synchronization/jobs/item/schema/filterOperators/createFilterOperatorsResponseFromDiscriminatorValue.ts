import {deserializeIntoFilterOperatorsResponse} from './deserializeIntoFilterOperatorsResponse';
import {FilterOperatorsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterOperatorsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilterOperatorsResponse;
}
