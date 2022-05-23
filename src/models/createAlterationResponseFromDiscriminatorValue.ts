import {AlterationResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlterationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlterationResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlterationResponseImpl();
}
