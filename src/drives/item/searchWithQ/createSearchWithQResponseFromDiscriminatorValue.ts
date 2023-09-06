import { deserializeIntoSearchWithQResponse } from './deserializeIntoSearchWithQResponse';
import { type SearchWithQResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchWithQResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchWithQResponse;
}
