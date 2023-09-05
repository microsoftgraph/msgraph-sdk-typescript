import { deserializeIntoListInfo } from './deserializeIntoListInfo';
import { type ListInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createListInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListInfo;
}
