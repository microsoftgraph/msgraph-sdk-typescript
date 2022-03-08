import {Alert} from './alert';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertFromDiscriminatorValue(parseNode: ParseNode | undefined) : Alert {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Alert();
}
