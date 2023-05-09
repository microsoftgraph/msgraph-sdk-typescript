import {deserializeIntoOmaSettingDateTime} from './deserializeIntoOmaSettingDateTime';
import {OmaSettingDateTime} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingDateTimeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingDateTime;
}
