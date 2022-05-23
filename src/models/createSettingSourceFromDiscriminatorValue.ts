import {SettingSourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingSourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingSourceImpl();
}
