import {UnifiedGroupSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedGroupSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedGroupSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedGroupSource();
}
