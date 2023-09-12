import { deserializeIntoFailureInfo } from './deserializeIntoFailureInfo';
import { type FailureInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFailureInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFailureInfo;
}
