import {Admin} from './admin';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminFromDiscriminatorValue(parseNode: ParseNode | undefined) : Admin {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Admin();
}
