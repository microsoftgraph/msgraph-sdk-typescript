import {deserializeIntoOutlookUser} from './deserializeIntoOutlookUser';
import {OutlookUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOutlookUser;
}
