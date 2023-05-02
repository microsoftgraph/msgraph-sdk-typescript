import {deserializeIntoGrantResponse} from './deserializeIntoGrantResponse';
import {GrantResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGrantResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGrantResponse;
}
