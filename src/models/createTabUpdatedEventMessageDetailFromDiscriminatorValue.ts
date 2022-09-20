import {TabUpdatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTabUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TabUpdatedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TabUpdatedEventMessageDetail();
}
