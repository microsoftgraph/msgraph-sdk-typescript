import { deserializeIntoPersonType } from './deserializeIntoPersonType';
import { type PersonType } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPersonTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPersonType;
}
