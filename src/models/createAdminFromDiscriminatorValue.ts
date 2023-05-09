import {deserializeIntoAdmin} from './deserializeIntoAdmin';
import {Admin} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdmin;
}
