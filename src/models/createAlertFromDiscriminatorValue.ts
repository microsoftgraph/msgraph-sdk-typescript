import {AlertImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertImpl();
}
