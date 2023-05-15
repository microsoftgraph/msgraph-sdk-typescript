import {deserializeIntoServiceHealth} from './deserializeIntoServiceHealth';
import {ServiceHealth} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealth;
}
