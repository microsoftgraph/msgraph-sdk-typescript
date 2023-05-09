import {deserializeIntoJson} from './deserializeIntoJson';
import {Json} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJsonFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoJson;
}
