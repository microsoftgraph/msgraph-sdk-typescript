import {SettingStateDeviceSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingStateDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingStateDeviceSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingStateDeviceSummaryImpl();
}
