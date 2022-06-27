import {OmaSettingDateTimeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingDateTimeFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingDateTimeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingDateTimeImpl();
}
