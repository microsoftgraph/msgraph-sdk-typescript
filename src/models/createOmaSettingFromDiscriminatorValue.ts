import {OmaSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSetting();
}
