import {UsageDetailsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsageDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsageDetailsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsageDetailsImpl();
}
