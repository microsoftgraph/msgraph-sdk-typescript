import {ConditionalAccessPlatformsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPlatformsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessPlatformsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessPlatformsImpl();
}
