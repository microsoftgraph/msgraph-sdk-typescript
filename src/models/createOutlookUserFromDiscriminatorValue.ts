import {OutlookUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookUserImpl();
}
