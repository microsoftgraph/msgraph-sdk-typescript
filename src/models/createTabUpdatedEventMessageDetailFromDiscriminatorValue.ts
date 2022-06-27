import {TabUpdatedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTabUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TabUpdatedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TabUpdatedEventMessageDetailImpl();
}
