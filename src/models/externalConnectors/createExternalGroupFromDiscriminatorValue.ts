import {deserializeIntoExternalGroup} from './deserializeIntoExternalGroup';
import {ExternalGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalGroup;
}
