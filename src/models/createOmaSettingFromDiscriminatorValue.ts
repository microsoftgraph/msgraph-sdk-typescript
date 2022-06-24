import {OmaSettingImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingImpl();
}
