import {deserializeIntoAlertDetection} from './deserializeIntoAlertDetection';
import {AlertDetection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlertDetection;
}
