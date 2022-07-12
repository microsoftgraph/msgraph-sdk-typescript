import {OmaSettingBoolean} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingBooleanFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingBoolean {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingBoolean();
}
