import {deserializeIntoPersonType} from './deserializeIntoPersonType';
import {PersonType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPersonType;
}
