import {deserializeIntoGetByIdsResponse} from './deserializeIntoGetByIdsResponse';
import {GetByIdsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByIdsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetByIdsResponse;
}
