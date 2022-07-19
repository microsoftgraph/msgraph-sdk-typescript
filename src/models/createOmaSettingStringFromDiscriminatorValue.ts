import {OmaSettingString} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingStringFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingString {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingString();
}
