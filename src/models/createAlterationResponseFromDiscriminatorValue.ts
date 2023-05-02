import {deserializeIntoAlterationResponse} from './deserializeIntoAlterationResponse';
import {AlterationResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlterationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlterationResponse;
}
