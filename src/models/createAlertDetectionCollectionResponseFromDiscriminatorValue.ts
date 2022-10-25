import {AlertDetectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertDetectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertDetectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertDetectionCollectionResponse();
}
