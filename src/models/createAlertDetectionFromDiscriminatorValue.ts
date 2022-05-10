import {AlertDetectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertDetectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertDetectionImpl();
}
