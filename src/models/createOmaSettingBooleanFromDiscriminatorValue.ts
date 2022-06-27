import {OmaSettingBooleanImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingBooleanFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingBooleanImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingBooleanImpl();
}
