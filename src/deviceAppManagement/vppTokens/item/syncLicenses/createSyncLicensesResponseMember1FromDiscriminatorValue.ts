import {SyncLicensesResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncLicensesResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SyncLicensesResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SyncLicensesResponseMember1();
}
