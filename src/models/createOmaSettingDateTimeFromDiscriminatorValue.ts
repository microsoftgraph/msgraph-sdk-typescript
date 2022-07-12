import {OmaSettingDateTime} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingDateTimeFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingDateTime {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingDateTime();
}
