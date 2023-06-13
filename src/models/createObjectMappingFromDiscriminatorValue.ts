import {deserializeIntoObjectMapping} from './deserializeIntoObjectMapping';
import {ObjectMapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectMappingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoObjectMapping;
}
