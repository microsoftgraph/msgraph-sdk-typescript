import {deserializeIntoResourceAccess} from './deserializeIntoResourceAccess';
import {ResourceAccess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceAccess;
}
