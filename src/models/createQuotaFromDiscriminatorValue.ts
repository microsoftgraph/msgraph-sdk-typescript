import {deserializeIntoQuota} from './deserializeIntoQuota';
import {Quota} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQuota;
}
