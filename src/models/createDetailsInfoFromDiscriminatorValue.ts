import { deserializeIntoDetailsInfo } from './deserializeIntoDetailsInfo';
import { type DetailsInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDetailsInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDetailsInfo;
}
