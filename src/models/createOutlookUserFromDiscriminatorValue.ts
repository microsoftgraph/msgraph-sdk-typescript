import { deserializeIntoOutlookUser } from './deserializeIntoOutlookUser';
import { type OutlookUser } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOutlookUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOutlookUser;
}
